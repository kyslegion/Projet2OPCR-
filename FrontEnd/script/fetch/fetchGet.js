const API_URL = "http://localhost:5678/api/works";
console.log("je suis dans fetchGet.js");
export const fetchGet = (shouldReturn = true,filter) => {
  return fetch(API_URL, {
    method: "Get",
  })
    .then((response) => {
      if (shouldReturn) {
        return response.json();
      } else {
        response.json().then((json) => {
          filter(json)
        });
        
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
export const fetchGetEdit = (shouldReturn = true,filter) => {
  return fetch(API_URL, {
    method: "Get",
  })
    .then((response) => {
      if (shouldReturn) {
        return response.json();
      } else {
        response.json().then((json) => {
          filter(json)
        });
        
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
  