import { useContext } from 'react';
import Card from '../../components/Card';
import ModalAdd from '../../components/ModalAdd';
import { AuthContext } from '../../providers/auth';
import { Button } from '../../styles/button';
import { Container } from './styles';

const Dashboard = () => {
  const { signOut, user } = useContext(AuthContext);

  return (
    <Container>
      <header>
        <div className="header-inner">
          <ModalAdd />
          {/* <Button>Adicionar contato</Button> */}
          <Button onClick={signOut}>Sair</Button>
        </div>
      </header>
      <div className="contacts">
        {user?.contacts.map((contact) => (
          <Card key={contact.id} contact={contact} />
        ))}
      </div>
    </Container>
  );
};

export default Dashboard;
