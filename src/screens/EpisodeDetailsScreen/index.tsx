import {  View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavigatorStackParamList } from '../../types/NavigatorsTypes'
import { useFetchEpisodeDetailsQuery } from '../../services/EpisodeService'
import MainLayout from '../../layouts/MainLayout'
import { useThemeColors } from '../../store/features/appearance/hooks'
import EpisodeDetailsScreenContainer from '../../containers/episodeDetailsScreenContainer'

type EpisodeDetailsPropsTypes = NativeStackScreenProps<MainNavigatorStackParamList, 'EpisodeDetails'>

const EpisodeDetails: React.FC<EpisodeDetailsPropsTypes> = ({ route }) => {

    const [searchCharacterValue, setSearchCharacterValue] = useState<string>('')
    const [characters, setCharacters] = useState<[] | CharacterArrayTypes[]>([])
    const [charactersLoading, setCharactersLoading] = useState(true)
    const { data, isLoading, isError } = useFetchEpisodeDetailsQuery(route.params.episode_id)
    const colors = useThemeColors()
    
    useEffect(() => {
        if (isError && isLoading) return;

        data?.characters.map(async (url: string) => {
            // If character data has already been fetched, do not make another API request.
            if (!characters.find(item => item.url === url)) {
                const charactersResponse = await fetch(url);
                const data = await charactersResponse.json();
                setCharacters(prevState => [...prevState, { url, character: data }]);
                // Update charactersLoading to false after successful fetch
                setCharactersLoading(false);
            }
        });
    }, [data])

    return (
        <View style={{ backgroundColor: colors.third, flex: 1, }}>
            <MainLayout>
                <EpisodeDetailsScreenContainer
                 characters={ characters ?? []} 
                 episodeData={data}
                 searchCharacterValue={searchCharacterValue}
                 setSearchCharacterValue={setSearchCharacterValue}
                 />
            </MainLayout>
        </View>
    )
}

export default EpisodeDetails
