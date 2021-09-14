import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./reducer";

const state = createFeatureSelector<State>('userData')

export const userInfo = createSelector(state, (state:State) => state.firstName)
