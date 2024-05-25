import { StyleSheet } from "react-native";
import commonStyles from "../../style/commonStyles"

export default StyleSheet.create({
    container: {
       ...commonStyles.centerElementsInRow,
        justifyContent: 'space-between',
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    button: {
        fontSize: 16,
    },
   
    pageInfo: {
        fontSize: 16,
    },
});
