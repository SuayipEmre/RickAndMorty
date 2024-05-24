import { FlatList,  ListRenderItem,  Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavigatorStackParamList } from '../../types/NavigatorsTypes'
import { useFetchEpisodeDetailsQuery } from '../../services/EpisodeService'
import MainLayout from '../../layouts/MainLayout'
import { useThemeColors } from '../../store/features/appearance/hooks'
import EpisodeCard from '../../components/episodeCard'
import SearchInput from '../../components/searchBar'
import SmallCharacterCard from '../../components/smallCharacterCard'


type Props = NativeStackScreenProps<MainNavigatorStackParamList, 'EpisodeDetails'>


type CharacterArrayTypes = {
    url: string,
    character: Character
}
const EpisodeDetails: React.FC<Props> = ({ route }) => {

    const [searchCharacterValue, setSearchCharacterValue] = useState<string>('')
    const [characters, setCharacters] = useState<[] | CharacterArrayTypes[]>([])
    const [charactersLoading, setCharactersLoading] = useState(true)
    const { data, isLoading, isError } = useFetchEpisodeDetailsQuery(route.params.episode_id)
    const colors = useThemeColors()



    //filter characters by search value.
    const filteredCharacters = () => characters?.filter((item: CharacterArrayTypes) => item?.character?.name?.toLowerCase().includes(searchCharacterValue.toLowerCase()))


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
    }, [data, isError, isLoading])


    const renderCharactersItems: ListRenderItem<CharacterArrayTypes> = ({ item }) => <SmallCharacterCard
        id={item.character.id}
        image={item.character.image}
        name={item.character.name}
        status={item.character.status}
    />


    const charactersListHeaderItems = () => (
        <>
            <SearchInput searchValue={searchCharacterValue} setSearchValue={setSearchCharacterValue} placeHolder='Search Character' />
            <EpisodeCard episode={data} />
            <Text style={{ color: colors.accent, fontSize: 17, marginVertical: 6, }}>Characters</Text>

        </>
    )



    return (
        <View style={{ backgroundColor: colors.third, flex: 1, }}>
            <MainLayout>


                <FlatList
                    data={searchCharacterValue.length > 1 ? filteredCharacters() : characters ?? []}
                    renderItem={renderCharactersItems}
                    keyExtractor={(item, index) => index.toString()}
                    snapToAlignment='center'
                    ListHeaderComponent={charactersListHeaderItems}
                    showsVerticalScrollIndicator={false}

                />
            </MainLayout>
        </View>
    )
}

export default EpisodeDetails
