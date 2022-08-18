import { ActionTypes } from "./actionType";




  export const addUser = (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user,
  });
  export const deleteUser = (user) => ({
    type: ActionTypes.DELETE_USER,
    payload: user,
  });
  export const updateUser = (user, index) => ({
    type: ActionTypes.UPDATE_USER,
    payload: user,
    index: index,
  });