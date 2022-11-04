import sendRequest from './send-request';

export function getAllTitles() {
    return sendRequest("/games")
  
}

export function purchaseGame(gameID) {
    return sendRequest(`/games/start/${gameID}`, "POST")
  
}