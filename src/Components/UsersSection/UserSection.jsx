import React from 'react'
import "./userSection.css"
import Tables from './Tables.jsx/Tables';
import { UserState } from '../../Context/Context';
import Modal from 'react-modal';
import CretaeModal from '../Modal/CretaeModal';
import EditModal from '../Modal/EditModal';


const UserSection = () => {
  
  const {state: {data,editModalIsOpen},dispatch} = UserState();
  const modelIsOpen = UserState().state.modelIsOpen;
  // console.log(data);

  const customStyles = {
    content: {
      width: "50%",
      height: "50%",
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>
      <Modal
        isOpen={modelIsOpen}
        contentLabel="Example Modal"
        ariaHideApp={false}
        style = {customStyles}
      >
        <CretaeModal/>
      </Modal>
      <Modal
        isOpen={editModalIsOpen}
        contentLabel="Example Modal"
        ariaHideApp={false}
        style = {customStyles}
      >
        <EditModal/>
      </Modal>


      <div className="container border mt-3">
        <div className="row mt-3">
          <div className="col text-primary">
            USERS
          </div>
          <div className="col">
            <button className='btn btn-primary' onClick={()=>{
              dispatch(
                {
                  type: "TOGGLE_CREATE_MODAL",
                  payload: modelIsOpen
                }
              )
            }}>CREATE</button>
          </div>
        </div>
        <div className="row border mt-3 tables-section">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Avatar</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {data.map(data =>{
            return <Tables id = {data.id} userInfo = {data} key = {data.id}/>
          })}
        </table>
        </div>
      </div>
    </div>
  )
}

export default UserSection