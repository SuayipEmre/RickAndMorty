import { useSelector } from "react-redux";
import { RootState } from "../../app/store";



export const useFavoriteCharacters = () => useSelector((state : RootState) => state.favoriteCharactersActions.favoriteCharacters)