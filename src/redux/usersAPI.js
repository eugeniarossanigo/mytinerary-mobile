import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiURL from '../../api'

export const usersAPI = createApi({
    reducerPath: "usersAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiURL
    }),
    
    endpoints: (builder) => ({
        userSignup: builder.mutation({
            query: (user) => ({
                url: '/auth/signup',
                method: 'POST',
                body: user
            })
        }),
        userLogin: builder.mutation({
            query: (user) => ({
                url: '/auth/signin',
                method: 'POST',
                body: user
            })
        }),
        userLoginToken: builder.mutation({
            query: (token) => ({
                url: '/auth/token',
                method: 'GET',
                headers: { Authorization: 'Bearer ' + token }
            })
        }),
        userLogout: builder.mutation({
            query: (user) => ({
                url: '/auth/signout',
                method: 'POST',
                body: user
            })
        })
    })
})

export default usersAPI;
export const { useUserSignupMutation, useUserLoginMutation, useUserLogoutMutation, useUserLoginTokenMutation } = usersAPI
