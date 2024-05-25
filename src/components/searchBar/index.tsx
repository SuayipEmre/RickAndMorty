import { TextInput, View } from 'react-native'
import React from 'react'
import { useThemeColors } from '../../store/features/appearance/hooks'
import Ant from 'react-native-vector-icons/AntDesign'
import styles from './styles'


type SearchInputPropsTypes = {
    searchValue : string
    setSearchValue : (value : string) => void,
    placeHolder : string
}
const SearchInput : React.FC<SearchInputPropsTypes> = ({searchValue, setSearchValue, placeHolder}) => {
    const colors = useThemeColors()

    return (
        <View style={styles.container}>
            <TextInput
                value={searchValue}
                onChangeText={setSearchValue}
                selectionColor={colors.accent}
                style={[{ backgroundColor: colors.secondary, color: colors.primary }, styles.input]}
                placeholder={placeHolder}
                placeholderTextColor={'#ccc'}
            />
            <Ant name='search1' size={24} color={colors.accent} />
        </View>
    )
}

export default SearchInput

