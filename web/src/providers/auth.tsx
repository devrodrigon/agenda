import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';
import { toast } from 'react-hot-toast';
import api from '../services/api';

export interface IContacts {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  contacts: IContacts[];
}

export interface IFormLogin {
  email: string;
  password: string;
}

export interface ISignUpForm {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  phone: string;
}

interface IAuthContext {
  login: (data: IFormLogin) => Promise<void>;
  signUp: (data: ISignUpForm) => Promise<void>;
  signOut: () => void;
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}

export const AuthContext = createContext({} as IAuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('@agenda');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      api
        .get('/profile')
        .then((response) => {
          setUser(response.data);

          navigate('/dashboard', { replace: true });
        })
        .catch((error) => {
          signOut();
        });
    }
  }, []);

  const login = async (data: IFormLogin) => {
    const toastLogin = toast.loading('Loading...');

    try {
      const resp = await api.post('/login', data);

      localStorage.setItem('@agenda', resp.data.token);

      api.defaults.headers.common['Authorization'] = `Bearer ${resp.data.token}`;

      const { data: profile } = await api.get('/profile');
      setUser(profile);

      toast.success('Bem Vindo!!', {
        id: toastLogin,
      });

      navigate('/dashboard', { replace: true });
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error);
        toast.error(error.response?.data.message, {
          id: toastLogin,
        });
      }
    }
  };

  const signUp = async (data: ISignUpForm) => {
    const toastRegister = toast.loading('Loading...');

    try {
      const resp = await api.post('/customers', data);

      toast.success('Cadastrado com sucesso!!', {
        id: toastRegister,
      });

      navigate('/login', { replace: true });
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error);
        console.log(error.response?.data.message);
        toast.error('Ops, algo deu errado', {
          id: toastRegister,
        });
      }
    }
  };

  function signOut() {
    setUser(null);
    localStorage.clear();
    navigate('/login', { replace: true });
  }

  return (
    <AuthContext.Provider value={{ login, signUp, signOut, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
