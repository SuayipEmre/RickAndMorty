import { Dimensions, StyleSheet } from "react-native"

const { width, height } = Dimensions.get('screen')
export default StyleSheet.create({

    image_card_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        height: height * 0.15,
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
})