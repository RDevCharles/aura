import * as usersAPI from "./users-api";


export function getToken() {
  // grab the token stored in local storage
  const token = localStorage.getItem('token');



  if (!token) return null;
//in this line we are taking the payload that we recieved from the server as a string 
  // going from ACSII to Binary then into json (decoding)
  const payload = JSON.parse(window.atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    return null;
  }

  return token;
}

//gets the user after being signed up or logged in

export function getUser() {
  const token = getToken();
  return token ?
    JSON.parse(window.atob(token.split('.')[1])).user
    :
    null;
}
//function to logout, will redirect on the frontend
export function logout() {
  localStorage.removeItem("token");


}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  console.log(token)
  localStorage.setItem("token", token);
  return getUser();
}
