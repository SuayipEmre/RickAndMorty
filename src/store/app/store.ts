import { configureStore } from '@reduxjs/toolkit'
import appearance from '../features/appearance'
import removeCharacterModal from '../features/removeCharacterModal'
import favoriteCharactersActions from '../features/favoriteCharacterActions'
import EpisodeService from '../../services/EpisodeService'
import CharacterService from '../../services/CharacterService'


const store = configureStore({

    reducer : {
        appearance,
        removeCharacterModal,
        favoriteCharactersActions,
        [EpisodeService.reducerPath] : EpisodeService.reducer,
        [CharacterService.reducerPath] : CharacterService.reducer
    },

    middleware: (getDefaultMiddleware) => {
        return (
            getDefaultMiddleware()
                .concat(EpisodeService.middleware)
                .concat(CharacterService.middleware)
        )
    }

 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store