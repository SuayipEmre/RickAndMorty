
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeColors } from '../../store/features/appearance/hooks'


type EpisodeCardPropsType = {
    episode: EpisodeItemTypes
}
const EpisodeCard: React.FC<EpisodeCardPropsType> = ({ episode }) => {
    const colors = useThemeColors()
    return (
        <View style={[{ backgroundColor: colors.secondary }, styles.container]}>
            
            <View style={styles.top_content_container}>
                <Text style={{ color: colors.primary }}>{episode.name}</Text>
                <Text style={{ color: colors.accent }}>{episode.episode}</Text>
            </View>
            
            <Text style={{ color: colors.primary }}>{episode.air_date}</Text>
            <Image source={{ uri: episode.url }} width={250} height={250} />
        </View>
    )
}

export default EpisodeCard


const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 2,
        height: height * 0.1,
        marginBottom: 12,
        padding:12,
        borderRadius: 12,
    },

    top_content_container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:12,
    }
})