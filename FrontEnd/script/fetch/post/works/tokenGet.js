// export function tokenGet(){
//     const token = localStorage.getItem('token');
//     const tokenObj = JSON.parse(token);
//     return { 'Authorization': 'Bearer ' + tokenObj.token };
// }
export function tokenGet(){
    const token = localStorage.getItem('token');
    const tokenObj = JSON.parse(token);
    return tokenObj;
}