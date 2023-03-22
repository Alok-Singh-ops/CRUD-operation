import React from 'react'
import { UserState } from '../../../Context/Context';



const Tables = ({userInfo}) => {
  const {id,avatar,firstName,lastName,userName} = userInfo;
  const {state: {editModalIsOpen},dispatch}= UserState();

 

  return (
    <>
    
    
    <tbody>
        <tr>
          <th scope="row">{id}</th>
          <td>{avatar}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{userName}</td>
          <td>
            <button type="button" className="btn btn-outline-warning" onClick={()=>{
              dispatch(
                {
                  type: "TOGGLE_EDIT_MODAL",
                  payload: editModalIsOpen
                }
              )
              dispatch({
                type: "SET_ID",
                payload: id
              })
            }}>Edit</button>
            <button type="button" className="btn btn-outline-danger ms-2" onClick={()=>{
              dispatch({
                type: "DELETE_USER",
                payload: id
              })
            }}>Delete</button>
          </td>
        </tr>
      </tbody>
    </>
  
  )
}

export default Tables