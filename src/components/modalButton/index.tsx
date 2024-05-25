import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useThemeColors } from '../../store/features/appearance/hooks'
import styles from './styles'

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

