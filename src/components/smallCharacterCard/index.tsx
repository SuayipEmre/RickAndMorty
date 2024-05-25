import { Image,  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useThemeColors } from '../../store/features/appearance/hooks'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../types/NavigatorsTypes'
import styles from './styles'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

type SmallCharacterCardPropsTypes = {
    isFavorites?: boolean,
    setRemoveFavoritesModal? : () => void,
    onPress: (character : Character) => void,
    character : Character

}

const SmallCharacterCard : React.FC<SmallCharacterCardPropsTypes> = ({isFavorites, onPress, character}) => {
    const handleCharacterDetail = (character_id: number, character_name: string) =>  navigation.navigate('CharacterDetailsScreen', { character_id, character_name })
    const colors = useThemeColors()
    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()
    
  return (
    <TouchableOpacity
        style={[{ backgroundColor: colors.secondary },
        styles.image_card_container]}
        onPress={() => handleCharacterDetail(character.id, character.name)}>
        <Image style={styles.image} source={{ uri: character.image}} />
        
        <View>
            <Text style={{ color: colors.accent, fontSize: 20, }}>{character.name.substring(0, 20)} {character.name.length > 19 && '...'}</Text>
            <Text style={{ color: colors.primary, opacity: .7 }}>{character.status}</Text>
        </View>
        {
            isFavorites && <TouchableOpacity onPress={() => onPress(character)}>
                <EvilIcons name='trash' color={'red'} size={24} />
            </TouchableOpacity>
        }


    </TouchableOpacity>
  )
}

export default SmallCharacterCard

