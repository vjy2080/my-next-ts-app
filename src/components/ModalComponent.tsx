import React from 'react';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBInput,
} from 'mdb-react-ui-kit';

type ModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isUpdate: boolean;
  title: string;
  desc: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDesc: React.Dispatch<React.SetStateAction<string>>;
  handleAction: () => void;
};

const ModalComponent:React.FC<ModalProps> = ({
  open,
  setOpen,
  isUpdate,
  title,
  desc,
  setTitle,
  setDesc,
  handleAction,
}) => {
  return (
    <MDBModal open={open} setOpen={setOpen}>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>{isUpdate ? 'Update' : 'Add New'}</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={() => setOpen(false)}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              tabIndex={1}
              className='mb-3'
              autoFocus
              label='Add title here'
              size='sm'
              id='form1'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <MDBInput
              tabIndex={2}
              autoFocus
              label='Add description here'
              size='sm'
              id='form1'
              type='text'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </MDBModalBody>
          <MDBModalFooter className='justify-content-center'>
            <MDBBtn tabIndex={3} onClick={handleAction}>
              {isUpdate ? 'Update' : 'Add New'}
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default ModalComponent;
