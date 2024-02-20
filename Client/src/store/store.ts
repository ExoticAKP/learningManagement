import { configureStore, Middleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import userReducer from './userSlice'
import { teacherApi } from './api/teacherApi';
import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { setupListeners } from '@reduxjs/toolkit/query';
export const store = configureStore({
  reducer: {
    [teacherApi.reducerPath]: teacherApi.reducer
  },
  middleware: (buildGetDefaultMiddleware)=> buildGetDefaultMiddleware().concat(teacherApi.middleware)
})
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
