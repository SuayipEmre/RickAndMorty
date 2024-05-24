import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useThemeColors } from '../../store/features/appearance/hooks'


type ModalButtonPropsTypes = {
    message : string,
    onPress : () => void,
    isApproveButton : boolean
}
const ModalButton : React.FC<ModalButtonPropsTypes> = ({isApproveButton, message, onPress}) => {
  const colors = useThemeColors()
    return (
    <TouchableOpacity style={[{
        backgroundColor: isApproveButton ? colors.accent : 'red'
    }, styles.container]}
    onPress={onPress}
    >
      <Text style={{color : colors.primary}}>{message}</Text>
    </TouchableOpacity>
  )
}

export default ModalButton

const styles = StyleSheet.create({
    container:{
        width : '30%',
        alignItems:'center',
        paddingVertical:6,
        borderRadius:6,
    },

    button:{}
  
})