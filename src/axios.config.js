import axios from 'axios'
axios.defaults.baseURL = 'http://bimavarest.loc/api/';

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.['Access-Control-Allow-Origin'] = '*';

export default axios