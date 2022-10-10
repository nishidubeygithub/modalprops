import { ActionTypes } from '../action/actionType'


const initialState = {
    userList: [],

};
// console.log(userList[])

export const reducer = (state = initialState, action) => {
  console.log(state)
    
    switch (action.type) {
        case ActionTypes.ADD_USER:
            console.log(action.payload)
            return { ...state, userList: [...state.userList, action.payload] };
        case ActionTypes.UPDATE_USER:
            let userData = [...state.userList];
            userData.splice(action.index, 1, action.payload);
            return { ...state, userList: userData};
        case ActionTypes.EDIT_USER:
            let editData = [...state.userList];
            editData.splice(action.index, 1, action.payload);
            return { ...state, userList: editData};
        case ActionTypes.DELETE_USER:
            let newData = [...state.userList];
            newData.splice(action.index, 1, action.payload);
            return { ...state, userList: newData};
        
            
        default:
            return state;
    }

}

export default reducer;