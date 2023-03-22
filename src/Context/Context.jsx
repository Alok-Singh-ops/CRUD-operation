import axios from 'axios';
import React, { useReducer,useEffect, useContext} from 'react'
import { createContext } from 'react'
import { usersReducer } from './reducer';




const CRUDContext = createContext();


const Context = ({children}) => {

  const initState = {
    data: [],
    modelIsOpen: false,
    editModalIsOpen: false,
    formData: {
      avatar: "",
      firstName: "",
      lastName: "",
      userName: ""
    },
    clickedId: 0
  };

  const [state, dispatch] = useReducer(usersReducer, initState)
  
  useEffect(() => {
    const initFetch = async ()=>{
      const req = await axios.get("data.json");
      dispatch({type: 'FETCH_USERS',payload: {data: req.data.data}})
    }
    initFetch();
  }, [])
  



  return (
    <CRUDContext.Provider value = {{state,dispatch}}>
      {children}
    </CRUDContext.Provider>
  )
}

export default Context
export const UserState = ()=>{
  return useContext(CRUDContext);
}