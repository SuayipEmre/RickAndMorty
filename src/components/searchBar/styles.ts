import { Dimensions, StyleSheet } from "react-native"

const { height } = Dimensions.get('screen')

export default StyleSheet.create({
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