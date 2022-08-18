import { ActionTypes } from '../action/actionType'


const initialState = {
    userList: [],

};


export const reducer = (state = initialState, action) => {
  
    
    switch (action.type) {
        case ActionTypes.ADD_USER:
            console.log(action.payload)
            return { ...state, userList: [...state.userList, action.payload] };
        case ActionTypes.UPDATE_USER:
            let userData = [...state.userList];
            userData.splice(action.index, 1, action.payload);
            return { ...state, userList: userData};
            case ActionTypes.DELETE_USER:
            console.log(action.payload)
            return { ...state, userList: [...state.userList, action.payload] };
            
            
        default:
            return state;
    }

}

export default reducer;