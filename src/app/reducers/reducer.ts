export interface State {
  userInfo: {
    firstName: string,
    lastName: string,
    exitDate: number,
    photo: string
  },
}

const initialState:State = {
  userInfo: {
    firstName: '',
    lastName: '',
    exitDate: 0,
    photo: ''
  },
}

export const reducers = (state = initialState, action: any): State  => {
  switch (action.type) {
    case 'USER_INFO':
      return {
        ...state,
        userInfo: action.userInfo
      }
    default: {
      return state;
    }
  }
};


