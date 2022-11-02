import { getToken } from "./users-service";

//function used to send requests to servers
// initially set to a get request
async function sendRequest(url, method = "GET", payload = null) {
 
  const options = { method };

  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();

  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }

    // setting request with axios and modifying config to match function parameters
   
  const res = await fetch(url,options);
 

  if (res.ok) {
    return res.json();
  }
  throw new Error("Bad request");
}

export default sendRequest;
