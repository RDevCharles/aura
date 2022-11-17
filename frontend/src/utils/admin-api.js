//admin code goes here
import sendRequest from "./send-request";

export default function getUserData(adminUser) {
    sendRequest("/admin/get-user-data", adminUser);
}

export default function getSiteVisits(adminUser) {
    sendRequest("/admin/get-site-visits", adminUser);
}

export function login(credentials) {
    return sendRequest("/login", "POST", credentials);
}