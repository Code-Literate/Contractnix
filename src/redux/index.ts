import { configureStore, combineReducers, Reducer } from "@reduxjs/toolkit";

// reducers
import userReducer from "./reducers/userReducer";

// persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
	key: "contractnix",
	storage,
	stateReconciler: autoMergeLevel2,
};

const rootReducer: Reducer = combineReducers({
	user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
	return configureStore({
		reducer: persistedReducer,
	});
};

export const store = makeStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
