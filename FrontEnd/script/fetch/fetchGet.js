const API_URL = "http://localhost:5678/api/works";
console.log("je suis dans fetchGet.js");
export const fetchGet = () => {
  return fetch(API_URL, {
    method: "Get",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
};
  