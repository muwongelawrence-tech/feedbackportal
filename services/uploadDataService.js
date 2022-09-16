import http from './httpService';
import config from "../config.json";


const apiEndpoint = config.apiURl + "/users";
// const apiEndpoint = config.apiURl + "/users";

export function submitData(data){
    return http.get(apiEndpoint);

}