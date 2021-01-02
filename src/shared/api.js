const FEEDHUNT_URL = 'https://feedhunt.herokuapp.com'
// const FEEDHUNT_URL = 'https://localhost:3000'


export function getAuthToken() {
    return window.sessionStorage.getItem("authToken");
}

export function isAuthenticated() {
    console.log("IS AUTH", window.sessionStorage.getItem("authToken"))
    return !!window.sessionStorage.getItem("authToken");
}

export function authApi(endPoint, userOptions = {}, isOtherApiCall = false) {
    const url = isOtherApiCall ? endPoint : FEEDHUNT_URL + endPoint;
  
    const authToken = getAuthToken();
  
    const defaultHeaders = {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",      
    };
    
    if (userOptions.body && userOptions.body.image instanceof File) {      
      console.log("IMAGE FILE")
      const formData = new FormData();
      for ( var key in userOptions.body ) {
        formData.append(key, userOptions.body[key]);
      }      
      userOptions.body = formData;
      // let browser set content-type to multipart/etc.
      delete defaultHeaders["Content-Type"]
    }
  
    const options = { ...userOptions, headers: { ...defaultHeaders, ...userOptions.headers } };
  
    return request(url, options);
}

function handleError(error) {
    error.response = {
      status: 0,
      statusText: "Cannot connect. Please make sure you are connected to internet.",
    };
    throw error;
}


function parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
      return null;
    }
    return response.json();
  }

function request(url, options) {
    return fetch(url, options)
      .catch(handleError) // handle network issues
      .then(checkStatus)
      .then(parseJSON)
      .catch((e) => {        
        throw e;
      });
  }

  function checkStatus(response) {
    const responseCode = response.status;
  
    if (responseCode >= 200 && responseCode < 300) {
      return response;
    }
  
    return response.json().then((json) => {
      return Promise.reject({
        status: responseCode,
        ok: false,
        statusText: response.statusText,
        body: json,
      });
    });
  }