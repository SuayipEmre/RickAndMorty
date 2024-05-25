import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,

    },
    modalView: {
        margin: 20,
        width: width * 0.6,
        height: height * 0.2,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
   
  
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
