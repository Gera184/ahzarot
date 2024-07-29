import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarShow: false,
  sidebarUnfoldable: false,
  theme: 'light',
  language: 'he',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSidebarShow: (state, action) => {
      state.sidebarShow = action.payload
    },
    setSidebarUnfoldable: (state, action) => {
      state.sidebarUnfoldable = action.payload
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    },
  },
})

export const { setSidebarShow, setTheme, setSidebarUnfoldable, setLanguage } = appSlice.actions
export default appSlice.reducer
