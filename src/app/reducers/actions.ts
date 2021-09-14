import { createAction, props } from '@ngrx/store';

export const userInfo = createAction(
  '[Authentication] User_Info',
  props<{ firstName: string }>()
)
