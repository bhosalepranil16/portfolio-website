import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isDarkTheme: true
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme
        }
    }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer