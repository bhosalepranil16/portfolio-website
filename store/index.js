import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import themeReducer from './slices/themeSlice';

const store = () => configureStore({
    reducer: {
      theme: themeReducer,
    },
    devTools: true
  })

  export default createWrapper(store)