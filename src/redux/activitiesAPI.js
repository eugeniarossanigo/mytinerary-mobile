import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../../api'

export const activitiesAPI = createApi({
    reducerPath: "activitiesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    
    endpoints: (builder) => ({
        getAllActivities: builder.query({
            query: () => '/activities'
        }),
        getActivities: builder.mutation({
            query(id){
                return{
                    url: '/activities?itinerary=' +id,
                    method: 'GET',
                }
            }
        }),
        getActivityItinerary: builder.query({
            query: (itinerary) => '/activities?itinerary='+itinerary
        }),
        getNewActivity: builder.mutation({
            query(activity){
                return{
                    url: '/activities',
                    method: 'POST',
                    body: activity
                }
            }
        }),
        getDeleteActivity: builder.mutation({
            query(id){
                return{
                    url: '/activities/' + id,
                    method: 'DELETE'
                }
            }
        }),
    })
})

export default activitiesAPI;
export const { useGetAllActivitiesQuery, useGetActivitiesMutation, useGetActivityItineraryQuery, useGetNewActivityMutation, useGetDeleteActivityMutation } = activitiesAPI