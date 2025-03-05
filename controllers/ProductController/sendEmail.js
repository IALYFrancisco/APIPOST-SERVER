import { sendEmailServices } from "../../services/sendEmailService.js";

export const sendEmail = async (request, response) => {
    response.set("Content-Type", "application/json");
    console.log(request.body);
    sendEmailServices(request.body);
    response.status(200).json("Hello user");
}