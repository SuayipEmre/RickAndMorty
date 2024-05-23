import { configureStore } from '@reduxjs/toolkit'
import appearance from '../features/appearance'
import EpisodeService from '../../services/EpisodeService'


const store = configureStore({

    reducer : {
        appearance,
        [EpisodeService.reducerPath] : EpisodeService.reducer
    },

    middleware: (getDefaultMiddleware) => {
        return (
            getDefaultMiddleware()
                .concat(EpisodeService.middleware)
        )
    }

 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store