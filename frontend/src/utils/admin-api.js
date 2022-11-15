//admin code goes here
import sendRequest from "./send-request";

export default function getUserData(adminUser) {
    sendRequest("/admin/get-user-data");
}

export default function getSiteVisits(adminUser) {
    sendRequest("/admin/get-site-visits");
}