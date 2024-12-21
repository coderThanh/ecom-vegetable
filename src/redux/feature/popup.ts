import { PopupContentType } from '@/app/_components/popup/popup'
import { ReactElement } from 'react'
import { createSlice } from '@reduxjs/toolkit'

type PopupSliceType = {
  isOpen: boolean
  content: ReactElement | null // <PopupContent></PopupContent>
}

const initialState: PopupSliceType = {
  isOpen: false,
  content: null,
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    updatePopupContent: (state, { payload }: { payload: ReactElement }) => {
      state.content = payload
    },
    togglePopupStatus: (state) => {
      state.isOpen = !state.isOpen
    },
    changePopupStatus: (state, { payload }: { payload: boolean }) => {
      state.isOpen = payload
    },
  },
})

export const { updatePopupContent, togglePopupStatus, changePopupStatus } =
  popupSlice.actions

export default popupSlice.reducer
