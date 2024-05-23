import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'



const baseUrl = "https://rickandmortyapi.com/api"

const EpisodeService = createApi({
    reducerPath: 'genres service',

    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    endpoints: (builder) => ({

        fetchAllEpisodes: builder.query({
            query: () => {
                return {
                    url: '/episode',
                    method: 'GET',
                    
                }
            }
        }),
       

       


    })
})
export const {
    useFetchAllEpisodesQuery,
} = EpisodeService
export default EpisodeService