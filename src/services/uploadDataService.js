import http from './httpService';
// import  axios from "axios";
import config from "../config.json";


const apiEndpoint = "http://api2.secondsug.com/api/add_feedback/";
// const apiEndpoint = config.apiURl + "/shoes";


export function submitData(data){
    return http.post(apiEndpoint, {
        name: data.name,
        bussiness_name: data.businessname,
        location: data.location,
        file: data.file,
        comment: data.comment
    });

}