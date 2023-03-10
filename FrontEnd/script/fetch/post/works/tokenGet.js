export function tokenGet(){
    const token = localStorage.getItem('token');
    const tokenObj = JSON.parse(token);
    const headers = { 'Authorization': 'Bearer ' + tokenObj.token }
}
        