import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../../api'

export const commentsAPI = createApi({
    reducerPath: "commentsAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),

    endpoints: (builder) => ({
        getAllComments: builder.mutation({
            query: (id) => ({
                url:  `/comments?itinerary=${id}`,
                method: 'GET',
            }),
        }),
        getCommentItinerary: builder.query({
            query: (itinerary) => '/comments?itinerary=' + itinerary
        }),
        getCommentUser: builder.query({
            query: (user) => '/comments?user=' + user
        }),
        getCommentId: builder.query({
            query: (id) => '/comments/'+id
        }),
        createNewComment: builder.mutation({
            query(comment){
                return{
                    url: '/comments',
                    method: 'POST',
                    body: comment,
                    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
                }
            }
        }),
        deleteComment: builder.mutation({
            query(id){
                return{
                    url: '/comments/' + id,
                    method: 'DELETE',
                    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
                }
            }
        }),
        updateComment: builder.mutation({
            query(body){
                return{
                    url: '/comments/' + body.id,
                    method: 'PATCH',
                    body: body,
                    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
                }
            }
        })
    })
})

export default commentsAPI;
export const { useCreateNewCommentMutation, useGetAllCommentsMutation } = commentsAPI
// useGetCommentIdQuery, useGetCommentItineraryQuery, useGetCommentUserQuery, useDeleteCommentMutation, useUpdateCommentMutation