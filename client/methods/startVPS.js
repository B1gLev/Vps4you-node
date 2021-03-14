const fetch = require('node-fetch');
const FormData = require('form-data'); 
const form = new FormData(); 

function startVPS(ACTION, SERVICEDID, callback) { 
     
    form.append('email', process.env.EMAIL); 
    form.append('apikey', process.env.APIKEY);
    form.append('action', ACTION);
    form.append('serviceid', SERVICEDID); 
    form.append('command', 'start');
    form.append('json', '1'); 

    const options = {
        method: 'POST',
        body: form,
        headers: form.getHeaders() 
    }

    fetch(process.env.HOST, options).then(function(response){
        return response.json();

    }).then(function(data){
        callback(data); 

    }).catch(error => {
        throw error;
    })

} 

module.exports = startVPS;