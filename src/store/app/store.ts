import { configureStore } from '@reduxjs/toolkit'
import appearance from '../features/appearance'


const store = configureStore({

    reducer : {
        appearance,
    },
 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store