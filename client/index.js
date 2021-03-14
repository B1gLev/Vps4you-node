const fetch = require('node-fetch');
const FormData = require('form-data');  

// POST method
const getVpsStatus = require('./methods/getVpsStatus');
const stopvps = require('./methods/stopVPS');
const shutdownvps = require('./methods/shutdownVPS');
const resetvps = require('./methods/resetVPS');
const reinstallvps = require('./methods/reinstallVPS'); 
const startvps = require('./methods/startVPS'); 

// Login method
function login(HOST, EMAIL, APIKEY, ACTION, callback) {

    const form = new FormData(); 
    form.append('email', EMAIL); 
    form.append('apikey', APIKEY);
    form.append('action', ACTION); 
    form.append('json', '1');

    process.env.HOST = HOST;
    process.env.EMAIL = EMAIL;
    process.env.APIKEY = APIKEY; 

    const options = {
        method: 'POST',
        body: form,
        headers: form.getHeaders() 
    }

    fetch(HOST, options).then(function(response){
        return response.json();

    }).then(function(data){
        callback(data); 

    }).catch(error => {
        throw error;
    })

}  

module.exports = {
    login: login, 

    getStatus: getVpsStatus,
    stopVPS: stopvps,
    shutdownVPS: shutdownvps,
    restartVPS: resetvps,
    reinstallVPS: reinstallvps,  
    startVPS: startvps, 
};