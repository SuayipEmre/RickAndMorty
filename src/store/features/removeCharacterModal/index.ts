import { PayloadAction, createSlice } from "@reduxjs/toolkit";




const initialState = {
    isModalOpen : false,
}

const RemoveCharactersModalSlice = createSlice({
    name : 'remove characters from favorites modal',
    initialState,
    reducers :  {
      _setRemoveCharactersModal: (state, action : PayloadAction<boolean>) => {
        state.isModalOpen  =  action.payload
      }
    },
})



export const{_setRemoveCharactersModal} = RemoveCharactersModalSlice.actions
export default RemoveCharactersModalSlice.reducer