import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useThemeColors } from '../../store/features/appearance/hooks'
import Ant from 'react-native-vector-icons/AntDesign'


type SearchInputPropsTypes = {
    searchValue : string
    setSearchValue : (value : string) => void
}
const SearchInput : React.FC<SearchInputPropsTypes> = ({searchValue, setSearchValue}) => {
    const colors = useThemeColors()

    return (
        <View style={styles.container}>
            <TextInput
                value={searchValue}
                onChangeText={setSearchValue}
                selectionColor={colors.accent}
                style={[{ backgroundColor: colors.secondary, color: colors.primary }, styles.input]}
                placeholder={'Search by episode name '}
                placeholderTextColor={'#ccc'}
            />
            <Ant name='search1' size={24} color={colors.accent} />
        </View>
    )
}

export default SearchInput


const { height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        gap: 12,
        marginBottom:12,
    },
    input: {
        width: '90%',
        height: height * 0.05,
        borderRadius: 12,
        paddingLeft: 6,

    }
})