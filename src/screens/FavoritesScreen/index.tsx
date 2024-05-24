import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useThemeColors } from '../../store/features/appearance/hooks'
import { getFavoriteCharactersFromStorage } from '../../utils/getFavoriteCharacters'
import MainLayout from '../../layouts/MainLayout'
import SmallCharacterCard from '../../components/smallCharacterCard'
import { SafeAreaView } from 'react-native-safe-area-context'

const FavoritesScreen = () => {
  const colors = useThemeColors()
  const [favorites, setFavorites] = useState<Character | []>([])

  useEffect(() => {

    const getFavorites = async () => {
      const favorites = await getFavoriteCharactersFromStorage()
      setFavorites(favorites)
    }


    getFavorites()
  }, [])

  const renderCharactersItems: ListRenderItem<Character> = ({ item }) => <SmallCharacterCard
    id={item.id}
    image={item.image}
    name={item.name}
    status={item.status}
    isFavorites
  />
  return (
    <SafeAreaView style={[{ backgroundColor: colors.third }, styles.container]}>
      <MainLayout>

        <FlatList
          data={favorites ?? []}
          renderItem={renderCharactersItems}
          keyExtractor={(item, index) => index.toString()}
          snapToAlignment='center'
          showsVerticalScrollIndicator={false}

        />
      </MainLayout>
    </SafeAreaView>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})