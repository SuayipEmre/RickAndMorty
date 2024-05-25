import { Dimensions, StyleSheet } from "react-native"
import commonStyles from "../../style/commonStyles"

const { height } = Dimensions.get('screen')

export default StyleSheet.create({
    container: {
        ...commonStyles.centerElements,
        width: '100%',
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