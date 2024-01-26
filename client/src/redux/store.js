import { combineReducers, configureStore } from '@reduxjs/toolkit'
 import userReducer from "./user/userSlice"
 import storage from "redux-persist/lib/storage"
 import {persistReducer, persistStore} from "redux-persist"
 let rootReducer = combineReducers({user:userReducer})

 let persistConfig = {
  key:"root",
storage,
version:1

 }
 let persistedReducer = persistReducer(persistConfig, rootReducer)
 let store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>
getDefaultMiddleware({
    serializableCheck:false
}),
  
})
let persistor = persistStore(store)
export { store, persistor };
export default store