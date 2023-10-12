import { combineReducers, createStore } from "redux";
import { cardsReducer } from "./cards-reducer";

const rootReducer = combineReducers({
  cards: cardsReducer,
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
