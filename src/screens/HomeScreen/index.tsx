import React, { useRef, useState } from 'react';
import { ListRenderItem, Text, FlatList, SafeAreaView } from 'react-native';
import { useFetchAllEpisodesQuery } from '../../services/EpisodeService';
import SearchInput from '../../components/searchBar';
import { useThemeColors } from '../../store/features/appearance/hooks';
import Loading from '../../components/loadingAnimation';
import EpisodeCard from '../../components/episodeCard';
import MainLayout from '../../layouts/MainLayout';
import Pagination from '../../components/pagination';


const HomeScreen = () => {
  const colors = useThemeColors();
  const [searchValue, setSearchValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading, isError } = useFetchAllEpisodesQuery(currentPage);


  //There are 3 pages of data in the API
  const totalPage = 3

  const filteredEpisodes = data?.results.filter((item: EpisodeItemTypes) =>
    item.name.toLocaleLowerCase().includes(searchValue.toLowerCase()) || item.episode.toLocaleLowerCase().includes(searchValue.toLowerCase())
  ) ?? [];


  const renderItems: ListRenderItem<EpisodeItemTypes> = ({ item }) => <EpisodeCard episode={item} />;

  const renderContent = () => {
    if (isLoading) return <Loading />;
    if (isError) return <Text>An error occurred</Text>;

    return (
      <>
        <FlatList
          data={filteredEpisodes}
          renderItem={renderItems}
          snapToAlignment="center"
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<SearchInput searchValue={searchValue} setSearchValue={setSearchValue} placeHolder="Search by episode name" />}
          ListFooterComponent={
            searchValue.length < 1 ? (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPage}
                    onPageChange={setCurrentPage}
                />
            ) : null
        }
        />

      </>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.third }}>
      <MainLayout>
        {renderContent()}
      </MainLayout>
    </SafeAreaView>
  );
};

export default HomeScreen;
