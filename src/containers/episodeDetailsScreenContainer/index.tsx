import { FlatList, ListRenderItem, Text, View } from 'react-native'
import React from 'react'
import SearchInput from '../../components/searchBar'
import EpisodeCard from '../../components/episodeCard'
import SmallCharacterCard from '../../components/smallCharacterCard'
import { useThemeColors } from '../../store/features/appearance/hooks'


type EpisodeDetailsScreenContainerPropsTypes = {
    searchCharacterValue: string,
    setSearchCharacterValue: (value: string) => void,
    episodeData: EpisodeItemTypes,
    characters: CharacterArrayTypes[]
}
const EpisodeDetailsScreenContainer: React.FC<EpisodeDetailsScreenContainerPropsTypes> = ({
    characters,
    episodeData,
    searchCharacterValue,
    setSearchCharacterValue
}) => {

    const colors = useThemeColors()
    const charactersListHeaderItems = () => (
        <>
            <SearchInput searchValue={searchCharacterValue} setSearchValue={setSearchCharacterValue} placeHolder='Search Character' />
            <EpisodeCard episode={episodeData} />
            <Text style={{ color: colors.accent, fontSize: 17, marginVertical: 6, }}>Characters</Text>

        </>
    )

    const renderCharactersItems: ListRenderItem<CharacterArrayTypes> = ({ item }) => <SmallCharacterCard
        character={item.character}
        onPress={() => { }}
    />



    return (
        <View>
            <FlatList
                data={characters}
                renderItem={renderCharactersItems}
                keyExtractor={(item, index) => index.toString()}
                snapToAlignment='center'
                ListHeaderComponent={charactersListHeaderItems}
                showsVerticalScrollIndicator={false}

            />
        </View>
    )
}

export default EpisodeDetailsScreenContainer
