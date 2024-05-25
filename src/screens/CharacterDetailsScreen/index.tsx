import { Text,  View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavigatorStackParamList } from '../../types/NavigatorsTypes'
import { useThemeColors } from '../../store/features/appearance/hooks'
import { useFetchCharacterQuery } from '../../services/CharacterService'
import MainLayout from '../../layouts/MainLayout'
import Loading from '../../components/loadingAnimation'
import CharacterDetailsScreenContainer from '../../containers/characterDetailsScreenContainer'

type CharacterDetailsScreenPropsTypes = NativeStackScreenProps<MainNavigatorStackParamList, 'CharacterDetailsScreen'>

const CharacterDetailsScreen: React.FC<CharacterDetailsScreenPropsTypes> = ({ route }) => {

    const { data, isLoading, isError } = useFetchCharacterQuery(route.params.character_id)
    const colors = useThemeColors()

    const renderContent = () => {
        if (isError) return <Text>An error occured while fetching data</Text>
        else if (isLoading) return <Loading />
        return <CharacterDetailsScreenContainer characterData={data}  />
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

