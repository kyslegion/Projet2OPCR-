const API_URL = "http://localhost:5678/api/works";
export const fetchGetWorks = () => {
  return fetch(API_URL, {
    method: "GET",
  })
    .then((response) => {
        return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
};