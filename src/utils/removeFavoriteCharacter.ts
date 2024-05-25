import AsyncStorage from "@react-native-async-storage/async-storage"
import { getFavoriteCharactersFromStorage } from "./getFavoriteCharacters"



export const removeFavoriteCharacter = async (character_id: number) => {

    const oldFavorites: Character[] = await getFavoriteCharactersFromStorage()
    if (oldFavorites != null) {
        const newFavorites: Character[] = oldFavorites.filter(item => item.id != character_id)

        try {
            await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites))
        } catch (error) {
            console.log("error : ", error)

        }

    }




}