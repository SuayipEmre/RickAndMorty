import { Dimensions, StyleSheet } from "react-native"

const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        marginHorizontal: 2,
        height: height * 0.1,
        marginBottom: 12,
        padding:12,
        borderRadius: 12,
    },

    top_content_container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:12,
    }
})