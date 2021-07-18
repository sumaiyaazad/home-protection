import axios from 'axios';
let send;
let array;
let response;

const fetchFlame=async()=>{
        try {
            response = await axios.get(' https://api.thingspeak.com/channels/1446074/fields/3.json');
            array=filterData(response.data.feeds,'field3');
            send=modifiedData(array);
            console.log("fetchFlame response: ",send);
            return send;
        } catch (e) {
            console.log("fetchFlame catch error response data: ",e.message);
        }
    };
const fetchGasLpg=async()=>{
        try {
            response = await axios.get('https://api.thingspeak.com/channels/1446074/fields/1.json');
            array=filterData(response.data.feeds,'field1');
            send=modifiedData(array);
            console.log("fetchGasLpg response: ",send);
            return send;
        } catch (e) {
            console.log("fetchGasLpg catch error response data: ",e.message);
        }
    };
const fetchGasSmoke= async ()=>{
        try {
            response = await axios.get('https://api.thingspeak.com/channels/1446074/fields/2.json');
            array=filterData(response.data.feeds,'field2');
           // console.log("fetchGasSmoke response without modification: ",response.data.feeds);
            send=modifiedData(array);
            console.log("fetchGasSmoke response: ",send);
            return send;
        } catch (e) {
            console.log("fetchGasSmoke catch error response data: ",e.message);
        }
    };
const fetchAT= async ()=>{
    try {
        response = await axios.get('https://api.thingspeak.com/channels/1446074/fields/5.json');
        console.log(response.data.feeds[response.data.feeds.length-1]);
        if(response.data.feeds[response.data.feeds.length-1]['field5']==="0"){

            return "PIR Inactive";
        }
        return "PIR Active";
    } catch (e) {
        console.log("fetchAT catch error response data: ",e.message);
    }
};
const fetchMD= async ()=>{
    try {

        response = await axios.get('https://api.thingspeak.com/channels/1446074/fields/4.json');
        if(response.data.feeds[response.data.feeds.length-1]['field4']===0 || response.data.feeds[response.data.feeds.length-1]['field4']===null){
            return "No Motion detected";
        }
        send=Date.parse(response.data.feeds[response.data.feeds.length-1]['created_at'])-parseInt(response.data.feeds[response.data.feeds.length-1]['field4']);
        console.log(send);
        send=(new Date(send)).toLocaleString();
        console.log("fetchMD response: ",send);
        return send;
    } catch (e) {
        console.log("fetchMD catch error response data: ",e.message);
    }
};
const postAT= async (context,value)=>{
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
const filterData= (response,field)=>{
    let j=0;
    let array=[];
    //console.log(response);
    for(let i=0;i<response.length;i++)
    {  // console.log(response[i]);
        if(response[i][field]!==null  && response[i][field]!=="?"){
            console.log("inside if response: ",response[i][field])
            array[j]=response[i];
            j++;
        }else{
            console.log(response[i]);
        }
    }
    return array;
};
export default{
fetchFlame, fetchGasLpg, fetchGasSmoke, fetchAT, fetchMD, postAT
}