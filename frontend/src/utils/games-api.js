import sendRequest from './send-request';

export function getAllTitles() {
    return sendRequest("/games")
  
}