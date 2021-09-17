import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./reducer";

export namespace Selectors {
  const state = createFeatureSelector<State>('userData');

  export const userInfo = createSelector(state, (state:State) => state.userInfo)
}
