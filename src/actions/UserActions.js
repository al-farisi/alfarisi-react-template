import Config from '../utils/Config';
const axios = require('axios');

export const getUser = async(state, dispatch) =>{
    var token = ''
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      };
    var data = {};
    await axios.get(Config.apiBasePath + 'user', data, { headers: headers })
    .then(function(response){
        return dispatch({
            type: 'GET_USER',
            payload: response.data
        });
    }).catch(function(error){
        console.log('getUser error', error);
    });
}