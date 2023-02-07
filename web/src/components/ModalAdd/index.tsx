import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactContext, IContactForm } from '../../providers/contact';
import { Button } from '../../styles/button';
import Input from '../Input';
import { FormStyle } from '../ModalEdit/styles';
import { schemaContact } from '../../validators/contact';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#ffffff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalAdd = () => {
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

  const { createContact } = useContext(ContactContext);

  const onSubmit = async (data: IContactForm) => {
    await createContact(data);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Adicionar Contato</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Adicionar contato</h3>
          <FormStyle onSubmit={handleSubmit(onSubmit)}>
            <Input<IContactForm>
              placeholder="nome"
              nameField="name"
              register={register}
              errors={errors}
            />
            <Input<IContactForm>
              placeholder="email"
              nameField="email"
              register={register}
              errors={errors}
            />
            <Input<IContactForm>
              placeholder="fone"
              nameField="phone"
              register={register}
              errors={errors}
            />

            <Button type="submit">Editar</Button>
          </FormStyle>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAdd;
