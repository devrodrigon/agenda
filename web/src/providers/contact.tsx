import { isAxiosError } from 'axios';
import { createContext, ReactNode, useContext } from 'react';
import toast from 'react-hot-toast';
import api from '../services/api';
import { AuthContext, IContacts } from './auth';

type IUpdateContact = Partial<IContacts>;

export type IContactForm = Omit<IContacts, 'id'>;

interface ContactContextData {
  createContact: (data: IContactForm) => Promise<void>;
  editContact: (contactId: string, data: IUpdateContact) => Promise<void>;
  deleteContact: (contactId: string) => Promise<void>;
}

export const ContactContext = createContext({} as ContactContextData);

interface ContactProviderProps {
  children: ReactNode;
}

const ContactProvider = ({ children }: ContactProviderProps) => {
  const { setUser } = useContext(AuthContext);

  const createContact = async (data: IContactForm) => {
    const createToast = toast.loading('Loading...');

    try {
      const { data: newContact } = await api.post('/contacts', data);

      setUser((userPrev) => {
        if (userPrev) {
          const newUser = { ...userPrev };
          newUser.contacts.push(newContact);
          return newUser;
        }
        return userPrev;
      });

      toast.success('Contato adicionado', {
        id: createToast,
      });
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error);
        toast.error(error.response?.data.message, {
          id: createToast,
        });
      }
    }
  };

  const editContact = async (contactId: string, data: IUpdateContact) => {
    const editToast = toast.loading('Loading...');
    try {
      const { data: contact } = await api.patch(`/contacts/${contactId}`, data);

      setUser((userPrev) => {
        if (userPrev) {
          const newUser = { ...userPrev };
          const index = newUser.contacts.findIndex((e) => e.id === contactId);
          newUser.contacts[index] = contact;
          return newUser;
        }
        return userPrev;
      });

      toast.success('Contato atualizado', {
        id: editToast,
      });
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error);
        toast.error(error.response?.data.message, {
          id: editToast,
        });
      }
    }
  };

  const deleteContact = async (contactId: string) => {
    const deleteToast = toast.loading('Loading...');

    try {
      await api.delete(`/contacts/${contactId}`);

      setUser((prevUser) => {
        if (prevUser) {
          const newUser = { ...prevUser };
          newUser.contacts = newUser.contacts.filter((e) => e.id !== contactId);
          return newUser;
        }
        return prevUser;
      });

      toast.success('Contato deletado', {
        id: deleteToast,
      });
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error);
        toast.error(error.response?.data.message, {
          id: deleteToast,
        });
      }
    }
  };

  return (
    <ContactContext.Provider value={{ editContact, deleteContact, createContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
