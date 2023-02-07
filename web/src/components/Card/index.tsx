import { Avatar } from '@mui/material';
import { CardStyled } from './styles';
import ModalEdit from '../ModalEdit';
import ModalDelete from '../ModalDelete';
import { IContacts } from '../../providers/auth';

interface CardProps {
  contact: IContacts;
}

const Card = ({ contact }: CardProps) => {
  const stringToColor = (string: string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  };

  const stringAvatar = (name: string) => {
    const splited = name.split(' ');
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: splited[1] ? `${splited[0][0]}${splited[1][0]}` : `${splited[0][0]}`,
    };
  };
  return (
    <CardStyled>
      <Avatar {...stringAvatar(`${contact.name}`)} />
      <h3>{contact.name}</h3>
      <span>{contact.email}</span>
      <span>{contact.phone}</span>
      <div>
        <ModalEdit contact={contact} />
        <ModalDelete contactId={contact.id} />
      </div>
    </CardStyled>
  );
};

export default Card;
