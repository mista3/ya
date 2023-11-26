import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { service } from '../../service';

type InitialState = {
  donutLoading: boolean,
  earthquakesLoading: boolean,
  donut: string,
  earthquakes: string,
}

const initialState: InitialState = {
  donutLoading: false,
  earthquakesLoading: false,
  donut: '',
  earthquakes: '',
}

export const fetchDonut = createAsyncThunk(
  'json/fetchDonut',
  async () => {
    const res = await service.getDonut()
    return res
  }
)

export const fetchEarthquakes = createAsyncThunk(
  'json/fetchEarthquakes',
  async () => {
    const res = await service.getEarthquakes()
    return res
  }
)

export const dataSlice = createSlice({
  name: 'json',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDonut.pending, (state) => {
        state.donutLoading = true
      })
      .addCase(fetchDonut.fulfilled, (state, action) => {
        state.donut = action.payload
        state.donutLoading = false
      })
      .addCase(fetchEarthquakes.pending, (state) => {
        state.earthquakesLoading = true
      })
      .addCase(fetchEarthquakes.fulfilled, (state, action) => {
        state.earthquakes = action.payload
        state.earthquakesLoading = false
      })
  },
})

export const { } = dataSlice.actions
export default dataSlice.reducer