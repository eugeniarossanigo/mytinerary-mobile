import { configureStore } from '@reduxjs/toolkit'
import citiesAPI from '../redux/citiesAPI'

export default configureStore ({
    reducer: {
        [citiesAPI.reducerPath] : citiesAPI.reducer
    }
})