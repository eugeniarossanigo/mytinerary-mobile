import { configureStore } from '@reduxjs/toolkit'
import citiesAPI from '../redux/citiesAPI'

export default configureStore ({
    reducer: {
        [citiesAPI.reducerPath] : citiesAPI.reducer,
    }
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