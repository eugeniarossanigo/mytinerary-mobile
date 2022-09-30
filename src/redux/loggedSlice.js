import { createSlice } from "@reduxjs/toolkit"

export const loggedSlice = createSlice({
    name: 'logged',
    initialState: {loggedState: false},
    reducers: {
        logged: (state, action) => {
            state.loggedState = !state.loggedState
        },
    }
})

export const { logged } = loggedSlice.actions
export default loggedSlice.reducer