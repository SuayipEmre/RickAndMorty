import { _setColors } from ".";
import store from "../../app/store";


export const setThemeColors = (theme : 'dark' | 'light') => store.dispatch(_setColors(theme))