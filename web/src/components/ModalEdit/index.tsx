import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Input from '../Input';
import { Button } from '../../styles/button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TiPencil } from 'react-icons/ti';
import { FormStyle } from './styles';
import { IContacts } from '../../providers/auth';
import { schemaContact } from '../../validators/contact';
import { ContactContext, IContactForm } from '../../providers/contact';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ModalEditProps {
  contact: IContacts;
}

const ModalEdit = ({ contact }: ModalEditProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    resolver: yupResolver(schemaContact),
  });

  const { editContact } = useContext(ContactContext);

  const onSubmit = async (data: IContactForm) => {
    await editContact(contact.id, data);

    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen}>
        <TiPencil />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Editar Contato</h3>
          <FormStyle onSubmit={handleSubmit(onSubmit)}>
            <Input<IContactForm>
              placeholder="nome"
              nameField="name"
              register={register}
              errors={errors}
              rules={{
                value: contact.name,
              }}
            />
            <Input<IContactForm>
              placeholder="email"
              nameField="email"
              register={register}
              errors={errors}
              rules={{
                value: contact.email,
              }}
            />
            <Input<IContactForm>
              placeholder="fone"
              nameField="phone"
              register={register}
              errors={errors}
              rules={{
                value: contact.phone,
              }}
            />

            <Button type="submit">Editar</Button>
          </FormStyle>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalEdit;
