export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export function handleUserLogin(id){
  return{
    type: USER_LOGIN,
    id
  }
}

export function handleUserLogout(){
  return{
    type: USER_LOGOUT
  }
}
