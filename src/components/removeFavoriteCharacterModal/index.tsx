import { Alert, Dimensions, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useThemeColors } from '../../store/features/appearance/hooks'
import ModalButton from '../modalButton'
import { setRemoveCharactersModal } from '../../store/features/removeCharacterModal/actions'
import { useIsRemoveCharacterModalOpen } from '../../store/features/removeCharacterModal/hooks'
import { removeFavoriteCharacter } from '../../utils/removeFavoriteCharacter'


type RemoveFavoriteCharacterModalPropsTypes = {
    characterName : string,
    characterID : number
}

const RemoveFavoriteCharacterModal : React.FC<RemoveFavoriteCharacterModalPropsTypes> = ({characterName, characterID,}) => {
    const colors = useThemeColors()
    const isModalOpen = useIsRemoveCharacterModalOpen()

    const remove = async () => {
        try {
            await removeFavoriteCharacter(characterID)
            setRemoveCharactersModal(false)  // Başarılı olduktan sonra modalı kapat
        } catch (error) {
            Alert.alert("Error", "Failed to remove favorite character.", )  // Hata oluşursa kullanıcıya bildirin
            console.log(error);
            
        }
    }
    
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalOpen}
            >
                <View style={styles.centeredView}>
                    <View style={[{backgroundColor:colors.secondary}, styles.modalView]}>
                        <Text style={[{color:colors.primary}, styles.modalText]}>{characterName} isimli karakteri favorilerden kaldırmak istediğinize emin misiniz?</Text>

                        <View style={{
                                width :'100%',
                                flexDirection:'row',
                                justifyContent:'space-between',
                        }}>
                          <ModalButton isApproveButton message='Evet' onPress={remove} />
                          <ModalButton isApproveButton={false} message='Hayır' onPress={() => setRemoveCharactersModal(false)} />

                       
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default RemoveFavoriteCharacterModal

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
