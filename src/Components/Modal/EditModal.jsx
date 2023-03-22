import React, { useState } from 'react'
import { UserState } from '../../Context/Context'

const EditModal = () => {
  const {state: {editModalIsOpen,data,clickedId},dispatch} = UserState();
  const [localFormData,setLocalFormData] = useState({
    firstName: "",
    lastName: "",
    userName: ""
  })
  // console.log(data);


  const handleChange = (e)=>{
    const {name,value} = e.target;
    setLocalFormData(prev =>{
      return ({
        ...prev,
        id: clickedId,
        [name]: value
      })
    })
  }
  return (
    <div>
      <form onSubmit= {(e)=>{
        e.preventDefault();
        console.log(data);
        dispatch({
          type: "EDIT_USER",
          payload: localFormData
        })
        dispatch({
          type: "TOGGLE_EDIT_MODAL",
          payload: editModalIsOpen
        })
      }}>
        <div className="mb-3">
          <label htmlFor="First Name" className="form-label" >First Name</label>
          <input type="text" className="form-control" id="First Name" onChange={handleChange} name = "firstName" value = {localFormData.firstName} />
        </div>
        <div className="mb-3">
          <label htmlFor="Last Name" className="form-label" onChange={handleChange}>Last Name</label>
          <input type="text" className="form-control" id="Last Name" onChange={handleChange} name = "lastName"  value = {localFormData.lastName}/>
        </div>
        <div className="mb-3">
          <label htmlFor="UserName" className="form-label" onChange={handleChange}>Username</label>
          <input type="text" className="form-control" id="Username" onChange={handleChange} name = "userName"  value = {localFormData.userName}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
</form>

<button className='btn btn-danger mt-3' onClick={()=>{
        dispatch({
          type: "TOGGLE_EDIT_MODAL",
          payload: editModalIsOpen
        })
      }}> Close</button>

    </div>
  )
}

export default EditModal