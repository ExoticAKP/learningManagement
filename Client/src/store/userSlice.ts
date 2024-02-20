import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

 interface CounterState {
  name: string,
  token: string,
}

const initialState: CounterState = {
  name: '',
  token : '',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<CounterState>) => {
      state.name = action.payload.name
      state.token = action.payload.token
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = counterSlice.actions

export default counterSlice.reducer