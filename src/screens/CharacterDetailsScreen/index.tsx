import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavigatorStackParamList } from '../../types/NavigatorsTypes'
import { useThemeColors } from '../../store/features/appearance/hooks'
import { useFetchCharacterQuery } from '../../services/CharacterService'
import MainLayout from '../../layouts/MainLayout'
import CharacterInformationItem from '../../components/characterInformationItem'
import Loading from '../../components/loadingAnimation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getFavoriteCharactersFromStorage } from '../../utils/getFavoriteCharacters'
import { addFavoriteCharacterToStorage } from '../../utils/addToFavorites'

type Props = NativeStackScreenProps<MainNavigatorStackParamList, 'CharacterDetailsScreen'>

const CharacterDetailsScreen: React.FC<Props> = ({ route }) => {

    const { data, isLoading, isError } = useFetchCharacterQuery(route.params.character_id)

    const colors = useThemeColors()


    const handleAddToFavorites = async () => {
   
        await addFavoriteCharacterToStorage(data)

    }
    const renderContent = () => {
        if (isError) return <Text>An error occured while fetching data</Text>
        else if (isLoading) return <Loading />
        return (
            <>
                <Image source={{ uri: data.image }} style={styles.image} />


                <CharacterInformationItem infotext={data.name} subtext='Name' />
                <CharacterInformationItem infotext={data.status} subtext='Status' />
                <CharacterInformationItem infotext={data.gender} subtext='Gender' />
                <CharacterInformationItem infotext={data.species} subtext='Species' />
                <CharacterInformationItem infotext={data.origin.name} subtext='Origin' />
                <CharacterInformationItem infotext={data.location.name} subtext='Location' />

                <TouchableOpacity style={[{ backgroundColor: colors.secondary }, styles.favorites_button]} onPress={handleAddToFavorites}>
                    <Text style={{ color: colors.primary }}>Add to Favorites</Text>
                    <MaterialIcons name='favorite' color={'red'} size={24} />
                </TouchableOpacity>
            </>
        )
    }


    return (
        <View style={{ backgroundColor: colors.third, flex: 1, }}>
            <MainLayout>

                {renderContent()}

            </MainLayout>
        </View>
    )
}

export default CharacterDetailsScreen

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: height * 0.4,
        borderRadius: 12,
        marginTop: 6,
    },
    favorites_button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: height * 0.06,
        paddingHorizontal: 12,
        borderRadius: 12,
        marginTop: 7,
    }
})