import { createSlice } from '@reduxjs/toolkit'

const initialState: { status: boolean } = {
  status: false,
}

export const asideSlice = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    toggleAside: (state) => {
      state.status = !state.status
    },
    changeStatusAside: (state, { payload }: { payload: boolean }) => {
      state.status = payload
    },
  },
})

export const { toggleAside, changeStatusAside } = asideSlice.actions

export default asideSlice.reducer
