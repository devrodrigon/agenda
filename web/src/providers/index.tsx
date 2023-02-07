import { ReactNode } from 'react';
import AuthProvider from './auth';
import ContactProvider from './contact';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ContactProvider>{children}</ContactProvider>
    </AuthProvider>
  );
};

export default Providers;
