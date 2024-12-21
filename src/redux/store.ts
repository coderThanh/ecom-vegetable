import { combineReducers, configureStore } from '@reduxjs/toolkit'
import popupSlice, { updatePopupContent } from '@/redux/feature/popup'

import asideSlice from '@/redux/feature/menu-aside'

const rootReducers = combineReducers({
  aside: asideSlice,
  popup: popupSlice,
})

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [updatePopupContent.type],
        ignoredActionPaths: ['popup'],
        ignoredPaths: ['popup'],
      },
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
