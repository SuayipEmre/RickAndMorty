import { Dimensions, StyleSheet } from "react-native"

const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
    image: {
        width: '100%',
        height: height * 0.4,
        borderRadius: 12,
        marginTop: 6,
    },
    favorites_button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: height * 0.06,
        paddingHorizontal: 12,
        borderRadius: 12,
        marginTop: 7,
    }
})