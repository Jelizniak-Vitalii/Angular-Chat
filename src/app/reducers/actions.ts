import { createAction, props } from '@ngrx/store';

  export const userInfo = createAction(
    'USER_INFO',
    props<{ userInfo: {} }>()
  )

