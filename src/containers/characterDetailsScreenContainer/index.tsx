import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useThemeColors } from '../../store/features/appearance/hooks'
import CharacterInformationItem from '../../components/characterInformationItem'
import { addCharacterToFavorites } from '../../store/features/favoriteCharacterActions/actions'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'

type CharacterDetailsScreenContainerPropsTypes = {
    characterData : Character
}
const CharacterDetailsScreenContainer : React.FC<CharacterDetailsScreenContainerPropsTypes> = ({characterData}) => {
    const colors = useThemeColors()
    return (
        <View>
            <Image source={{ uri: characterData.image }} style={styles.image} />


            <CharacterInformationItem infotext={characterData.name} subtext='Name' />
            <CharacterInformationItem infotext={characterData.status} subtext='Status' />
            <CharacterInformationItem infotext={characterData.gender} subtext='Gender' />
            <CharacterInformationItem infotext={characterData.species} subtext='Species' />
            <CharacterInformationItem infotext={characterData.origin.name} subtext='Origin' />
            <CharacterInformationItem infotext={characterData.location.name} subtext='Location' />

            <TouchableOpacity style={[{ backgroundColor: colors.secondary }, styles.favorites_button]} onPress={() => addCharacterToFavorites(characterData)}>
                <Text style={{ color: colors.primary }}>Add to Favorites</Text>
                <MaterialIcons name='favorite' color={'red'} size={24} />
            </TouchableOpacity>
        </View>
    )
}

export default CharacterDetailsScreenContainer
