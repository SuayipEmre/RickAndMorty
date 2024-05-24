import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useThemeColors } from '../../store/features/appearance/hooks'
import { getFavoriteCharactersFromStorage } from '../../utils/getFavoriteCharacters'
import MainLayout from '../../layouts/MainLayout'
import SmallCharacterCard from '../../components/smallCharacterCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsRemoveCharacterModalOpen } from '../../store/features/removeCharacterModal/hooks'
import RemoveFavoriteCharacterModal from '../../components/removeFavoriteCharacterModal'
import { setRemoveCharactersModal } from '../../store/features/removeCharacterModal/actions'

const FavoritesScreen = () => {
  const colors = useThemeColors()
  const [favorites, setFavorites] = useState<Character[] | []>([])
  const [selectedCharacter, setSelectedCharacter] = useState<Character>({} as Character)
  const isRemoveModalOpen = useIsRemoveCharacterModalOpen()

  useEffect(() => {

    const getFavorites = async () => {
      const favorites = await getFavoriteCharactersFromStorage()
      setFavorites(favorites)
    }


    getFavorites()
  }, [])

  const handleRemoveCharacterFromFavorites = (character : Character ) => {
    setRemoveCharactersModal(!isRemoveModalOpen)
    setSelectedCharacter(character)
  }


  const renderCharactersItems: ListRenderItem<Character> = ({ item }) => <SmallCharacterCard
    isFavorites
    onPress={(character : Character) => handleRemoveCharacterFromFavorites(character)}
    character={item}
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

        <RemoveFavoriteCharacterModal characterName={selectedCharacter.name} characterID={selectedCharacter.id} />
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