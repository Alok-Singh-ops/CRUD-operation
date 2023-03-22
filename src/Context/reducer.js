export const usersReducer = (state,action)=>{
  switch (action.type) {
    case "FETCH_USERS":
      const {data} = action.payload;
      return {...state,data};

    case "TOGGLE_CREATE_MODAL":
      return {...state,
        modelIsOpen: !state.modelIsOpen
      }
    
      case "TOGGLE_EDIT_MODAL":
      return {...state,
        editModalIsOpen: !state.editModalIsOpen
      }

    case "CREATE_USER":
      const localFormData = action.payload;
      localFormData["id"] = state.data.length+1;
      return {...state,
        data: [...state.data, localFormData],
      };
    case "DELETE_USER":
      return {
        ...state,
        data: state.data.filter(
          (user) => user.id !== action.payload
        ),
      };

      case "EDIT_USER":
        const updatedUser = action.payload;

        const updatedUsers = state.data.map((User) => {
          if (User.id === updatedUser.id) {
            return updatedUser;
          }
          return User;
        });


  
        return {
          ...state,
          data: updatedUsers,
        };
      
        case "SET_ID":
          return {
            ...state,
            clickedId: action.payload
          }


    default:
      return state;

  }
}