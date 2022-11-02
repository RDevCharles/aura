import sendRequest from "./send-request";

//Will fix after adding routes in backend;
//const BASE_URL = "/"

export function signup(userdata) {
    return sendRequest("/signup","POST", userdata)
};

export function login(credentials) {
    return sendRequest("/login","POST", credentials)
}

export function getEvents() {
    return sendRequest("/events")
}

