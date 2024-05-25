import { Text, View } from 'react-native'
import React from 'react'
import { useThemeColors } from '../../store/features/appearance/hooks'
import styles from './styles'

type CharacterInformationItemPropsTypes = {
    subtext : string,
    infotext : string
}
const CharacterInformationItem : React.FC<CharacterInformationItemPropsTypes> = ({infotext, subtext}) => {
    const colors = useThemeColors()
    return (
        <View style={styles.container}>
            <Text style={[{ color: colors.accent }, styles.subText ]}>{subtext} :  </Text>
            <Text style={{ color: colors.primary }}>{infotext}</Text>
        </View>
    )
}

export default CharacterInformationItem

