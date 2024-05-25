import { FlatList, ListRenderItem, Text, View } from 'react-native'
import React, {  useState } from 'react'
import SearchInput from '../../components/searchBar'
import EpisodeCard from '../../components/episodeCard'
import SmallCharacterCard from '../../components/smallCharacterCard'
import { useThemeColors } from '../../store/features/appearance/hooks'
import Pagination from '../../components/pagination'


type EpisodeDetailsScreenContainerPropsTypes = {
    searchCharacterValue: string,
    setSearchCharacterValue: (value: string) => void,
    episodeData: EpisodeItemTypes,
    characters: CharacterArrayTypes[]
}

const ITEMS_PER_PAGE = 10;

const EpisodeDetailsScreenContainer: React.FC<EpisodeDetailsScreenContainerPropsTypes> = ({
    characters,
    episodeData,
    searchCharacterValue,
    setSearchCharacterValue
}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const colors = useThemeColors()
    
    

    const renderCharactersItems: ListRenderItem<CharacterArrayTypes> = ({ item }) => <SmallCharacterCard
        character={item.character}
        onPress={() => { }}
    />

    //Filtered characters
    const filteredCharacters = characters?.filter((item: CharacterArrayTypes) =>
        item?.character?.name?.toLowerCase().includes(searchCharacterValue.toLowerCase())
    )

    const totalPages = Math.ceil(filteredCharacters.length / ITEMS_PER_PAGE);


    // Characters to be displayed on the current page
    const currentCharacters = filteredCharacters.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    )


    
    return (
        <View>
            <FlatList
                data={searchCharacterValue.length > 1 ? filteredCharacters : currentCharacters}
                renderItem={renderCharactersItems}
                keyExtractor={(item, index) => index.toString()}
                snapToAlignment='center'
                ListHeaderComponent={ <>
                    <SearchInput searchValue={searchCharacterValue} setSearchValue={setSearchCharacterValue} placeHolder='Search Character' />
                    <EpisodeCard episode={episodeData} />
                    <Text style={{ color: colors.accent, fontSize: 17, marginVertical: 6, }}>Characters</Text>
        
                </>}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    searchCharacterValue.length < 1 ? (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    ) : null
                }

            />
        </View>
    )
}

export default EpisodeDetailsScreenContainer
