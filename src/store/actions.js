import router from "@/router";
import axios from 'axios';
let send;
let response;

const fetchFlame=async()=>{
        try {
            response = await axios.get(' https://api.thingspeak.com/channels/1446074/fields/3.json');
            send=modifiedData(response.data.feeds);
            console.log("fetchFlame response: ",send);
            return send;
        } catch (e) {
            console.log("fetchFlame catch error response data: ",e.message);
        }
    };
const fetchGasLpg=async()=>{
        try {
            response = await axios.get('https://api.thingspeak.com/channels/1446074/fields/1.json');
            send=modifiedData(response.data.feeds);
            console.log("fetchGasLpg response: ",send);
            return send;
        } catch (e) {
            console.log("fetchGasLpg catch error response data: ",e.message);
        }
    };
const fetchGasSmoke= async ()=>{
        try {
            response = await axios.get('https://api.thingspeak.com/channels/1446074/fields/2.json');
            send=modifiedData(response.data.feeds);
            console.log("fetchGasSmoke response: ",send);
            return send;
        } catch (e) {
            console.log("fetchGasSmoke catch error response data: ",e.message);
        }
    };
const fetchAT= async ()=>{
    try {
        response = await axios.get('https://api.thingspeak.com/channels/1446074/fields/5.json');
        send=modifiedData(response.data.feeds);
        console.log("fetchAT response: ",send);
        return send;
    } catch (e) {
        console.log("fetchAT catch error response data: ",e.message);
    }
};
const fetchMD= async ()=>{
    try {
        response = await axios.get('https://api.thingspeak.com/channels/1446074/fields/4.json');
        send=modifiedData(response.data.feeds);
        console.log("fetchMD response: ",send);
        return send;
    } catch (e) {
        console.log("fetchMD catch error response data: ",e.message);
    }
};
const postAT= async (value)=>{
    try {
        await axios.post('https://api.thingspeak.com/update?api_key=KRJ5C7MAMRWHSSKO&field5='+value);
        return true;
    } catch (e) {
        console.log("fetchMD catch error response data: ",e.message);
    }
};

const modifiedData= (array)=>{
        let init= array.length>5 ? (array.length-5) : 0;
        array=array.slice(init,array.length);
        for(let i=0;i<array.length;i++)
        {
            array[i].created_at=(new Date(Date.parse(array[i].created_at))).toLocaleString();
        }
        return array;
    };
export default{
fetchFlame, fetchGasLpg, fetchGasSmoke, fetchAT, fetchMD, postAT
}