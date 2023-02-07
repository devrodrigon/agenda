import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { BiTrash } from 'react-icons/bi';
import { ContactContext } from '../../providers/contact';

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

interface ModalDeleteProps {
  contactId: string;
}

const ModalDelete = ({ contactId }: ModalDeleteProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { deleteContact } = useContext(ContactContext);

  return (
    <div>
      <button onClick={handleOpen}>
        <BiTrash />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Tem certeza que deseja deletar este contato?</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              deleteContact(contactId);
              handleClose();
            }}
          >
            <button type="submit">sim</button>
            <button type="button" onClick={handleClose}>
              não
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalDelete;
