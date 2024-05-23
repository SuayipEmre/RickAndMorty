import { ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useFetchAllEpisodesQuery } from '../../services/EpisodeService'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/searchBar'
import { useThemeColors } from '../../store/features/appearance/hooks'
import Loading from '../../components/loadingAnimation'
import { FlatList } from 'react-native'
import EpisodeCard from '../../components/episodeCard'
import MainLayout from '../../layouts/MainLayout'

const HomeScreen = () => {
  const { data, isLoading, isError } = useFetchAllEpisodesQuery({})
  const colors = useThemeColors()
  const [searchValue, setSearchValue] = useState<string>('')



  const filteredEpisodes = data?.results.filter((item: EpisodeItemTypes) => (
    item.name.toLocaleLowerCase().includes(searchValue.toLowerCase()) || item.episode.toLocaleLowerCase().includes(searchValue.toLowerCase()))
  )

  const renderItems: ListRenderItem<EpisodeItemTypes> = ({ item, index }) => <EpisodeCard episode={item} />

  const renderContent = () => {
    if (isLoading) return <Loading />
    else if (isError) return <Text>An error occured</Text>

    return <FlatList
      data={filteredEpisodes ?? []}
      renderItem={renderItems}
      snapToAlignment='center'
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<SearchInput searchValue={searchValue} setSearchValue={setSearchValue} placeHolder='Search by episode name' />}

    />
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.third }}>
      <MainLayout>

        {
          renderContent()
        }
      </MainLayout>
    </SafeAreaView>
  )
}

export default HomeScreen
