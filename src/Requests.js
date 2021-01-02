
const Data = {};
const baseUrl = 'http://localhost:3001'

Data.getTest = () => {
  let url  = `${baseUrl}/testing`;
  return fetch(url).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse.test
    });
  });
};





export default Data;