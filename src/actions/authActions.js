import {api_url} from '../config/config';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    //setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
    let logindata = {
        userId : data.userId,
        password: data.password
    };
  return dispatch => {
    return fetch(`${api_url}user/login`, {
            method: 'post',
            body: JSON.stringify(logindata) ,
            headers: {
            "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data.user)
          localStorage.setItem('user', data.user.name);
          localStorage.setItem('role', data.user.role);
          localStorage.setItem('isAuthenticated',true );
          dispatch(setCurrentUser(data));
        } )
    }
 
}