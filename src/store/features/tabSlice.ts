import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { Tab } from '../../types'

type InitialState = {
  tab: Tab,
}

const initialState: InitialState = {
  tab: 'counter',
}

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    navigate: (state, action: PayloadAction<Tab>) => {
      state.tab = action.payload
    },
  }
})

export const { navigate } = tabSlice.actions
export default tabSlice.reducer