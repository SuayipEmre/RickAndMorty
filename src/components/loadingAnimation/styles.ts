import { Dimensions, StyleSheet } from "react-native"

const{height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
      height : height,
      alignItems :'center',
      justifyContent :'center',
    },
  })