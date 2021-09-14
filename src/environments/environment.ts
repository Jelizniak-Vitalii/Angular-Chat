
export const host = 'http://localhost:3000'


export const environment = {
  production: false,

  REGISTRATION: host + '/register',
  REGISTRATION_AUTHENTICATION: host + '/register/secret',

  LOGIN: host + '/login',
  LOGIN_AUTHENTICATION: host + '/login/secret',

  CHAT_GET_MESSAGES: host + '/chat-list'
};


