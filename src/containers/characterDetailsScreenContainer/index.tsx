import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useThemeColors } from '../../store/features/appearance/hooks'
import CharacterInformationItem from '../../components/characterInformationItem'
import { addCharacterToFavorites, removeCharacterFromFavorites } from '../../store/features/favoriteCharacterActions/actions'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import { useFavoriteCharacters } from '../../store/features/favoriteCharacterActions/hooks'

type CharacterDetailsScreenContainerPropsTypes = {
    characterData: Character
}
const CharacterDetailsScreenContainer: React.FC<CharacterDetailsScreenContainerPropsTypes> = ({ characterData }) => {
    const colors = useThemeColors()
    const [isFavoriteCharacter, setIsFavoriteCharacter] = useState(false)
    const favoriteCharacters = useFavoriteCharacters()

    useEffect(() => {
        const isFavorite = favoriteCharacters.some(item => item.id == characterData.id)
        setIsFavoriteCharacter(isFavorite)

    }, [])


    const handleAddCharacterToFavorites = () => {

        if(favoriteCharacters.length > 9 ){
            console.log('there are 10 favorite character !');
            
            return
        }
        addCharacterToFavorites(characterData)
        setIsFavoriteCharacter(true)
    }
    
    return (
        <View>
            <Image source={{ uri: characterData.image }} style={styles.image} />


            <CharacterInformationItem infotext={characterData.name} subtext='Name' />
            <CharacterInformationItem infotext={characterData.status} subtext='Status' />
            <CharacterInformationItem infotext={characterData.gender} subtext='Gender' />
            <CharacterInformationItem infotext={characterData.species} subtext='Species' />
            <CharacterInformationItem infotext={characterData.origin.name} subtext='Origin' />
            <CharacterInformationItem infotext={characterData.location.name} subtext='Location' />

            {
                !isFavoriteCharacter ? (
                    <TouchableOpacity style={[{ backgroundColor: colors.secondary }, styles.favorites_button]} onPress={handleAddCharacterToFavorites}>
                        <Text style={{ color: colors.primary }}>Add to Favorites</Text>
                        <MaterialIcons name='favorite' color={'red'} size={24} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={[{ backgroundColor: colors.secondary }, styles.favorites_button]} onPress={() => {
                        removeCharacterFromFavorites(characterData.id)
                        setIsFavoriteCharacter(false)
                    }}>
                        <Text style={{ color: colors.primary }}>Remove From Favorites</Text>
                        <MaterialIcons name='favorite' color={'red'} size={24} />
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

export default CharacterDetailsScreenContainer
