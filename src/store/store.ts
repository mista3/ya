import { configureStore } from '@reduxjs/toolkit'
import tabReducer from './features/tabSlice'
import jsonReducer from './features/jsonSlice'
import countReducer from './features/countSlice'
import { useSelector as useReduxSelector, useDispatch as useReduxDispatch, type TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    json: jsonReducer,
    count: countReducer,
  }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useDispatch: () => AppDispatch = useReduxDispatch
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector