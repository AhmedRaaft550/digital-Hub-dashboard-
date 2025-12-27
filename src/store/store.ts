import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authenticationSlice from "./authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "token", "isAuthenticated"],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authenticationSlice),
});

export const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const presistStore = persistStore(reduxStore);

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
