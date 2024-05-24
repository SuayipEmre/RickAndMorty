import { Image,  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useThemeColors } from '../../store/features/appearance/hooks'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../types/NavigatorsTypes'
import styles from './styles'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

type SmallCharacterCardPropsTypes = {
    image : string,
    name : string,
    status : string,
    id : number,
    isFavorites?: boolean

}

const SmallCharacterCard : React.FC<SmallCharacterCardPropsTypes> = ({image, name, status, id, isFavorites}) => {
    const handleCharacterDetail = (character_id: number, character_name: string) =>  navigation.navigate('CharacterDetailsScreen', { character_id, character_name })
    const colors = useThemeColors()
    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()
  return (
    <TouchableOpacity
        style={[{ backgroundColor: colors.secondary },
        styles.image_card_container]}
        onPress={() => handleCharacterDetail(id, name)}>
        <Image style={styles.image} source={{ uri: image}} />
        <View>
            <Text style={{ color: colors.accent, fontSize: 20, }}>{name.substring(0, 20)} {name.length > 19 && '...'}</Text>
            <Text style={{ color: colors.primary, opacity: .7 }}>{status}</Text>
        </View>
        {
            isFavorites && <TouchableOpacity>
                <EvilIcons name='trash' color={'red'} size={24} />
            </TouchableOpacity>
        }
    </TouchableOpacity>
  )
}

export default SmallCharacterCard

