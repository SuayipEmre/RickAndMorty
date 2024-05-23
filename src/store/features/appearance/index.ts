import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ThemeColorTypes } from "../../../types/ThemeColorTypes";



type initialStateTypes = {
    
    preferredTheme : string,
    
    themeColors : ThemeColorTypes
}


const Colors : { 
    dark : ThemeColorTypes,
    light : ThemeColorTypes
} = {

    dark : {
        primary : '#FFFFFF',
        secondary :'#1D1D20',
        third :'#0A0A0A',
        tabbar : {
            backgorundColor : '#1D1D20',
            active_tint_color : '#FFFFFF',
            inactive_tint_color : '#7B7D7F',
        },
        accent: '#32CD32', // Teal
    },
    light: {
        primary : '#101213',
        secondary :'#F1F1F1',
        third :'#FFFFFF',
        tabbar : {
            backgorundColor : '#F1F1F1',
            active_tint_color : '#101213',
            inactive_tint_color : '#7B7D7F',
        },
        accent: '#32CD32', // Teal
    },
}


const initialState : initialStateTypes = {

    preferredTheme :'light',

    
    themeColors : Colors.light 
}


/*
primary => texts
secondary => elements
third : background
*/


export const AppearanceSlice = createSlice({
    name : 'Appearance',
    initialState,
    reducers : {
        _setColors : (state, action : PayloadAction<'dark' | 'light'>) => {
            state.preferredTheme = action.payload
            state.themeColors = Colors[action.payload]
        }
    }
})


export const {_setColors} = AppearanceSlice.actions
export default AppearanceSlice.reducer