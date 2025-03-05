import { sendEmailServices } from "../../services/sendEmailService.js";

export const sendEmail = async (request, response) => {
    response.set("Content-Type", "application/json");
    let brevoRequestResponse = await sendEmailServices(request.body);
    if(brevoRequestResponse){
        response.status(200).json("Email sent 📩✅")
    }else {
        response.status(500).json("Error in the server ⛔💻")
    }
}