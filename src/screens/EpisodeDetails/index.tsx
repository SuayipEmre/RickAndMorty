import { Dimensions, FlatList, Image, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavigatorStackParamList } from '../../types/NavigatorsTypes'
import { useFetchEpisodeDetailsQuery } from '../../services/EpisodeService'
import MainLayout from '../../layouts/MainLayout'
import { useThemeColors } from '../../store/features/appearance/hooks'
import EpisodeCard from '../../components/episodeCard'
import SearchInput from '../../components/searchBar'


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
    }, [data, isError, isLoading]);


    const renderCharactersItems: ListRenderItem<CharacterArrayTypes> = ({ item }) => <View style={[{ backgroundColor: colors.secondary }, styles.image_card_container]}>
        <Image style={styles.image} source={{ uri: item?.character?.image }} />
        <View>
            <Text style={{ color: colors.accent, fontSize: 20, }}>{item?.character?.name.substring(0, 20)} {item?.character?.name.length > 19 && '...'}</Text>
            <Text style={{ color: colors.primary, opacity: .7 }}>{item?.character?.status}</Text>
        </View>
    </View>


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

const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({

    image_card_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        height: height * 0.15,
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
})