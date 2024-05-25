import { Modal, Text,  View } from 'react-native'
import React from 'react'
import { useThemeColors } from '../../store/features/appearance/hooks'
import ModalButton from '../modalButton'
import { setRemoveCharactersModal } from '../../store/features/removeCharacterModal/actions'
import { useIsRemoveCharacterModalOpen } from '../../store/features/removeCharacterModal/hooks'
import { removeCharacterFromFavorites } from '../../store/features/favoriteCharacterActions/actions'
import styles from './styles'

type RemoveFavoriteCharacterModalPropsTypes = {
    characterName : string,
    characterID : number
}

const RemoveFavoriteCharacterModal : React.FC<RemoveFavoriteCharacterModalPropsTypes> = ({characterName, characterID,}) => {
    const colors = useThemeColors()
    const isModalOpen = useIsRemoveCharacterModalOpen()
    
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalOpen}
            >
                <View style={styles.centeredView}>
                    <View style={[{backgroundColor:colors.secondary}, styles.modalView]}>
                        <Text style={[{color:colors.primary}, styles.modalText]}>Are you sure you want to remove the character named "{characterName}" from favorites?</Text>

                        <View style={{
                                width :'100%',
                                flexDirection:'row',
                                justifyContent:'space-between',
                        }}>
                          <ModalButton isApproveButton message='Evet' onPress={() => removeCharacterFromFavorites(characterID)} />
                          <ModalButton isApproveButton={false} message='Hayır' onPress={() => setRemoveCharactersModal(false)} />

                       
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default RemoveFavoriteCharacterModal

