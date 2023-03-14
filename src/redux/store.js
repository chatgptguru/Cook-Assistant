import { configureStore, createSlice } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { uiReducer } from "./ui-slice";
import { messageReducer } from "./message";
import { recipeReducer } from "./recipes";
import { promptReducer } from "./prompt";
import { imageReducer } from "./image";
import { ingredientsReducer } from "./ingredients";
import { instructionsReducer } from "./instructions";
import { searchReducer } from "./search";
import { recipeCardReducer } from "./recipeCard";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

// import authReducer from "./auth";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  auth: authReducer,
  uiSlice:uiReducer,
  message: messageReducer,
  recipe:recipeReducer,
  prompt:promptReducer,
  ingredients:ingredientsReducer,
  image:imageReducer,
  instructions: instructionsReducer,
  search: searchReducer,
  recipeCard: recipeCardReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      // serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
