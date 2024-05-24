import { _addCharacterToFavorites, _getFavoriteCharactersFromStorage, _removeCharacterFromFavorites } from ".";
import store from "../../app/store";


export const remove = (character_id : number) =>  store.dispatch(_removeCharacterFromFavorites(character_id))
export const addCharacterToFavorites = (character: Character) =>  store.dispatch(_addCharacterToFavorites(character))
export const getFavoriteCharacters = () =>  store.dispatch(_getFavoriteCharactersFromStorage())