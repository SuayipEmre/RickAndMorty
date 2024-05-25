import { Dimensions, StyleSheet } from "react-native"
import commonStyles from "../../style/commonStyles"

const { width, height } = Dimensions.get('screen')
export default StyleSheet.create({

    image_card_container: {
        ...commonStyles.centerElementsInRow,
        justifyContent: 'space-between',
        marginVertical: 10,
        height: height * 0.15,
        paddingHorizontal: 10,
        borderRadius: 12,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
})