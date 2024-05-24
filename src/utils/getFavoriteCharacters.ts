import AsyncStorage from "@react-native-async-storage/async-storage"



export const getFavoriteCharactersFromStorage = async () => {
    try {
        const favoriteCharacters  = await AsyncStorage.getItem('favorites')
        return JSON.parse(favoriteCharacters)
        
    } catch (e) {
        console.log(e)
        return null

    }

}