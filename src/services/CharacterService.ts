import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'



const baseUrl = "https://rickandmortyapi.com/api"

const CharacterService = createApi({
    reducerPath: 'Character service',

    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    endpoints: (builder) => ({

        fetchCharacter: builder.query({
            query: (character_id : string) => {
                return {
                    url: `/character/${character_id}`,
                    method: 'GET',
                    
                }
            }
        }),

       

       


    })
})
export const {
    useFetchCharacterQuery
} = CharacterService
export default CharacterService