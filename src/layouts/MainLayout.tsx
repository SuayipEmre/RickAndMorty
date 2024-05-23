import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type MainLayoutTypes = {
    children : React.ReactNode
}
const MainLayout : React.FC<MainLayoutTypes>  = ({children}) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

export default MainLayout

const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        width : width * 0.9
    },
})