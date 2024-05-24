import { _setRemoveCharactersModal } from ".";
import store from "../../app/store";


export const setRemoveCharactersModal = (isOpen : boolean) => store.dispatch(_setRemoveCharactersModal(isOpen))