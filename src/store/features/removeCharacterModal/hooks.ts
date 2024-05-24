import { useSelector } from "react-redux";
import { RootState } from "../../app/store";


export const useIsRemoveCharacterModalOpen = () => useSelector((state : RootState) => state.removeCharacterModal.isModalOpen)