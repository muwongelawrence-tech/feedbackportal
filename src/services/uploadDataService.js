import http from './httpService';
import config from "../config.json";


const apiEndpoint = "https://api2.secondsug.com/add_feedback/";
// const apiEndpoint = config.apiURl + "/shoes";


export function submitData(data){
    return http.get(apiEndpoint);

}