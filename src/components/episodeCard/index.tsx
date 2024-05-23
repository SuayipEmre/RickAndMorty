
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useThemeColors } from '../../store/features/appearance/hooks'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorStackParamList } from '../../types/NavigatorsTypes'
import styles from './styles'

type EpisodeCardPropsType = {
    episode: EpisodeItemTypes
}
const EpisodeCard: React.FC<EpisodeCardPropsType> = ({ episode }) => {
    const colors = useThemeColors()
    const navigation = useNavigation<NavigationProp<MainNavigatorStackParamList>>()

    const handleEpisodeDetail = () => {
      navigation.navigate('EpisodeDetails',{episode_id : episode.id, episode_name : episode.name})
      
    }

    return (
        <TouchableOpacity style={[{ backgroundColor: colors.secondary }, styles.container]} activeOpacity={.7} onPress={handleEpisodeDetail}>
            
            <View style={styles.top_content_container}>
                <Text style={{ color: colors.primary }}>{episode?.name}</Text>
                <Text style={{ color: colors.accent }}>{episode?.episode}</Text>
            </View>
            
            <Text style={{ color: colors.primary }}>{episode?.air_date}</Text>
            <Image source={{ uri: episode?.url }} width={250} height={250} />
        </TouchableOpacity>
    )
}

export default EpisodeCard

