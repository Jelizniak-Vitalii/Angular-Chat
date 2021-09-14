export interface State {
  userInfo: {
    firstName: string,
    lastName: string,
    exitDate: number,
    photo: string
  },

  firstName: string,
}

const initialState:State = {
  userInfo: {
    firstName: '',
    lastName: '',
    exitDate: 0,
    photo: ''
  },
  firstName: ''
}

export const reducers = (state = initialState, action: any)  => {
  switch (action.type) {
    case '[Authentication] User_Info': {
      return { ...state, firstName: state.firstName}
    }
    default: {
      return state;
    }
  }
};


