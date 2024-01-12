'use client';

import React, { useState, useEffect } from 'react';
import './page.module.css';
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

type dataArrayProps = {
  title: string;
  description: string;
  id: string;
};

export default function Home(): React.JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [data, setData] = useState<dataArrayProps[]>([]);
  const [updateId, setUpdateId] = useState<string>('');
  const baseUrl: string = 'http://localhost:3004/posts';
  const [basicModal, setBasicModal] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const response: Response = await fetch(baseUrl);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleOpen = () => {
    if (basicModal === true) {
      setTitle('');
      setDesc('');
      setIsUpdate(false)
      setBasicModal(false);
    }
    setBasicModal(!basicModal)

  };

  const addHandle = async (): Promise<void> => {

    if (title && desc) {
      try {
        const response = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title,
            description: desc,
          }),
        });
        if (response.ok) {
          fetchData();
          setTitle('');
          setDesc('');
          setBasicModal(false);
        } else {
          console.error('Failed to add data');
        }
      } catch (error) {
        console.error('Error adding data:', error);
      }
    }
  };

  const updateHandle = (id: string) => {
    const selectedItem: dataArrayProps | undefined = data.find((item) => item.id === id);
    if (selectedItem !== undefined) {
      setTitle(selectedItem.title);
      setDesc(selectedItem.description);
      setUpdateId(id);
      setBasicModal(true);
      setIsUpdate(true);
    }
  };

  const updateDataHandle = async (): Promise<void> => {
    if (title && desc) {
      try {
        const response = await fetch(`${baseUrl}/${updateId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, description: desc }),
        });

        if (response.ok) {
          fetchData();
          setTitle('');
          setDesc('');
          setBasicModal(false);
          setIsUpdate(false);
          console.log('Data Updated');
        } else {
          console.error('Failed to update data');
        }
      } catch (error) {
        console.error('Error updating data:', error);
      }
    }
  };

  const deleteHandle = async (id: string): Promise<void> => {
    try {
      const response = await fetch(baseUrl + '/' + id, {
        method: 'delete',
      });

      if (response.ok) {
        fetchData();
      } else {
        console.error('Failed to delete data');
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className='text-center d-flex'>
      <MDBTable hover small>
        <MDBTableHead className='next'>
          <tr className='table-primary'>
            <th>Title</th>
            <th>Description</th>
            <th>
              <MDBBtn className='me-1 btn-sm' color='success' onClick={toggleOpen}>
                Add
              </MDBBtn>
            </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{ fontSize: 12, textAlign: 'left' }}>{item.title}</td>
              <td style={{ fontSize: 12, textAlign: 'left' }}>{item.description}</td>
              <td className='d-flex flex-direction-column justify-content-center'>
                <MDBBtn className='me-2 btn-sm' color='info' onClick={() => updateHandle(item.id)}>
                  Edit
                </MDBBtn>

                <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='4'>
                  <MDBModalDialog>
                    <MDBModalContent>
                      <MDBModalHeader>
                        <MDBModalTitle>{isUpdate ? 'Update' : 'Add New'}</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                      </MDBModalHeader>
                      <MDBModalBody>
                        <MDBInput
                          tabIndex={1}
                          className='text-center mb-3'
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
                          className='text-center'
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
                        <MDBBtn
                          tabIndex={3}
                          onClick={isUpdate ? updateDataHandle : addHandle}
                        >
                          {isUpdate ? 'Update' : 'Add New'}
                        </MDBBtn>
                      </MDBModalFooter>
                    </MDBModalContent>
                  </MDBModalDialog>
                </MDBModal>

                <MDBBtn className='btn-sm' color='danger' onClick={() => deleteHandle(item.id)}>
                  Delete
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div >
  );
};