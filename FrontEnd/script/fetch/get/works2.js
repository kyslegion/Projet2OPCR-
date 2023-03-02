const API_URL = "http://localhost:5678/api/works";
export const fetchGetWorks = () => {
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