import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { removeFavoriteCharacter } from "../../../utils/removeFavoriteCharacter"
import { setRemoveCharactersModal } from "../removeCharacterModal/actions"
import { Alert } from "react-native"
import { addFavoriteCharacterToStorage } from "../../../utils/addToFavorites"
import { getFavoriteCharactersFromStorage } from "../../../utils/getFavoriteCharacters"


type initialStateTypes = {
    favoriteCharacters : Character[]   
}

const initialState : initialStateTypes = {

    favoriteCharacters : []
}


export const _removeCharacterFromFavorites = createAsyncThunk('favoriteCharacters/remove', async (character_id : number) => {
    try {

        // storage 
        await removeFavoriteCharacter(character_id)
        setRemoveCharactersModal(false)  //  close modal after succesfully remove
    } catch (error) {
        Alert.alert("Error", "Failed to remove favorite character.", )  
        console.log(error);
    }

    return character_id
})


export const _addCharacterToFavorites = createAsyncThunk('favoriteCharacters/add', async (character : Character) => {
    try{
        await addFavoriteCharacterToStorage(character)
    } catch(error) {
        Alert.alert("Error", "Failed to add character to favorites. Please try again later.", )  
        console.log(error)
    }
    return character
})


export const _getFavoriteCharactersFromStorage = createAsyncThunk('favoriteCharacters/get', async () => {
    try{
        const favorites = await getFavoriteCharactersFromStorage()
        return favorites
    } catch(error) {
        Alert.alert("Error", "Failed to fetch favorite characters. Please try again later.", )  
        console.log(error)
    }
   
})




export const favoriteCharacterActionsSlice = createSlice({
    name : 'favoriteCharacterActionsSlide',
    initialState,
    reducers : {
      
    },


    extraReducers: (builder) => {
        builder
            .addCase(_removeCharacterFromFavorites.fulfilled, (state, action) => {
                //update ui
                state.favoriteCharacters = state.favoriteCharacters.filter(item => item.id != action.payload)
            })

            .addCase(_addCharacterToFavorites.fulfilled, (state, action) => {
                state.favoriteCharacters.push(action.payload as Character)
            })

            .addCase(_getFavoriteCharactersFromStorage.fulfilled, (state, action) => {
                state.favoriteCharacters = action.payload
            })

    }
})

export default favoriteCharacterActionsSlice.reducer