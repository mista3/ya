import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  count: number,
}

const initialState: InitialState = {
  count: 0,
}

export const countSlice = createSlice({
  name: 'json',
  initialState,
  reducers: {
    increment: (state) => { state.count++ },
    decrement: (state) => { state.count-- },
  },
})

export const { increment, decrement } = countSlice.actions
export default countSlice.reducer