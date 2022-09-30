import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import apiURL from '../../api'

let token
AsyncStorage.getItem('token').then(value => token = value)

export const itinerariesAPI = createApi({
    reducerPath: "itinerariesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    
    endpoints: (builder) => ({
        getItineraries: builder.mutation({
            query(id){
                return{
                    url: '/itineraries?city=' +id,
                    method: 'GET',
                }
            }
        }),
        getItineraryCity: builder.query({
            query: (city) => '/itineraries?city=' + city
        }),
        getItineraryUser: builder.mutation({
            query(id){
                return{
                    url: '/itineraries?user=' +id,
                    method: 'GET'
                }
            }
        }),
        NewItinerary: builder.mutation({
            query(itinerary){
                return{
                    url: '/itineraries',
                    method: 'POST',
                    body: itinerary
                }
            }
        }),
        PatchItinerary: builder.mutation({
            query(itinerary){
                return{
                    url: '/itineraries/' + itinerary.id,
                    method: 'PATCH',
                    body: itinerary
                }
            }
        }),
        DeleteItinerary: builder.mutation({
            query(id){
                return{
                    url: '/itineraries/' + id,
                    method: 'DELETE'
                }
            }
        }),
        likeDislike: builder.mutation({
            query: (id) => ({
                url: '/itineraries/likes/' + id,
                method: 'PATCH',
                headers: { Authorization: `Bearer ${token}` }
            })
        })
    })
})

export default itinerariesAPI;

export const { useGetItinerariesMutation, useDeleteItineraryMutation, useLikeDislikeMutation } = itinerariesAPI