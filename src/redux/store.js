import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import citiesAPI from '../redux/citiesAPI'
import itinerariesAPI from '../redux/itinerariesAPI'
import activitiesAPI from '../redux/activitiesAPI'
import reloadSlice from '../redux/reloadSlice'
import commentsAPI from './commentsAPI'

export default configureStore ({
    reducer: {
        [citiesAPI.reducerPath] : citiesAPI.reducer,
        [itinerariesAPI.reducerPath] : itinerariesAPI.reducer,
        [activitiesAPI.reducerPath] : activitiesAPI.reducer,
        [commentsAPI.reducerPath] : commentsAPI.reducer,
        reload: reloadSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(citiesAPI.middleware).concat(itinerariesAPI.middleware)
        .concat(activitiesAPI.middleware).concat(commentsAPI.middleware)
})

// import { configureStore } from '@reduxjs/toolkit'
// import citiesAPI from '../redux/citiesAPI'
// import itinerariesAPI from '../redux/itinerariesAPI'
// import activitiesAPI from '../redux/activitiesAPI'
// import usersAPI from '../redux/usersAPI'
// import reloadSlice from '../redux/reloadSlice'


// export default configureStore ({
//     reducer: {
//         [citiesAPI.reducerPath] : citiesAPI.reducer,
//         [itinerariesAPI.reducerPath] : itinerariesAPI.reducer,
//         [activitiesAPI.reducerPath] : activitiesAPI.reducer,
//         [usersAPI.reducerPath] : usersAPI.reducer,
//         [commentsAPI.reducerPath] : commentsAPI.reducer,
//         reload: reloadSlice
//     }
// })