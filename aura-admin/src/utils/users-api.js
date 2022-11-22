import sendRequest from "./send-request";

export function login(credentials) {
    return sendRequest("/login","POST", credentials)
}
