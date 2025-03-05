import axios from 'axios';

export async function sendEmailServices(dataTosend){
    try {
        await axios({
            method: 'POST',
            url: "https://api.brevo.com/v3/smtp/email",
            data: dataTosend
            // {
            //     name: "Test email",
            //     sender: {
            //         "name": "IALY Francisco Raymond",
            //         "email": "ialyfrancisco7@gmail.com"
            //     },
            //     to: [{
            //         "email": "franciscoialy43@gmail.com"
            //     }],
            //     subject: "Our discussion",
            //     htmlContent: "This the content"
            // }
            ,
            headers: {
                "Content-Type":"application/json",
                "api-key": process.env.API_KEY
            }
        }).then((response)=>{
            return response
        }).catch((error) => {
            return error
        })
    }catch(error){
        return error
    }
}