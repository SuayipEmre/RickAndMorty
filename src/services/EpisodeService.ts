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

        fetchEpisodeDetails: builder.query({
            query: (episode_id : number) => {
                return {
                    url: `/episode/${episode_id}`,
                    method: 'GET',
                    
                }
            }
        }),
       

       


    })
})
export const {
    useFetchAllEpisodesQuery,
    useFetchEpisodeDetailsQuery
} = EpisodeService
export default EpisodeService