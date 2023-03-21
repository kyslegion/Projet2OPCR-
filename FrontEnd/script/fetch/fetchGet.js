const API_URL = "http://localhost:5678/api/works";
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
    .then((data)=>{
    })
    .catch((error) => {
      console.error(error);
    });
};