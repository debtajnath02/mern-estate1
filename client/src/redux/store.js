import { configureStore } from '@reduxjs/toolkit'
 import userReducer from "./user/userSlice"
 let store = configureStore({
  reducer: {user:userReducer},
  middleware:(getDefaultMiddleware)=>
getDefaultMiddleware({
    serializableCheck:false
}),
  
})

export default store