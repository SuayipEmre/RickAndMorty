import AsyncStorage from "@react-native-async-storage/async-storage"
import { getFavoriteCharactersFromStorage } from "./getFavoriteCharacters"

export const addFavoriteCharacterToStorage = async(characterData : Character) => {
    const favoriteCharacters = await getFavoriteCharactersFromStorage()

    const newFavorites = [ ...favoriteCharacters, {...characterData} ]
    try {
        await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites))

    } catch (error) {
        console.log("error : ", error)

    }
}