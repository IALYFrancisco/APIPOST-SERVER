import axios from 'axios';

export async function sendEmailServices(dataTosend){
    try {
        await axios({
            method: 'POST',
            url: "https://api.brevo.com/v3/smtp/email",
            data: dataTosend,
            headers: {
                "Content-Type":"application/json",
                "api-key": process.env.API_KEY
            }
        }).then((response)=>{
            console.log(response)
            return response
        }).catch((error) => {
            console.log(error)
            return error
        })
    }catch(error){
        console.log(error)
        return error
    }
}