import React from 'react';
import { Store } from '../stores/Store';
import Config from '../utils/Config';
import { getUser } from '../actions/UserActions';

const axios = require('axios');

export default function HomePage() {
    const { state, dispatch } = React.useContext(Store);
    const getUserAction = async() =>{
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

    const props = {
        user: state.user
    };
    React.useEffect(() => {
        getUser(state, dispatch);
    },[]);

    return(
        <div>
           <h1>Home Page</h1>
           <p>name: {props.user.name}</p>
           <p>email: {props.user.email}</p>
           <p>position: {props.user.position}</p>
        </div>
    )
}