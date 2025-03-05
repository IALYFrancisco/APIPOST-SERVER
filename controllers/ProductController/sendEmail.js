import { sendEmailServices } from "../../services/sendEmailService.js";

export const sendEmail = async (request, response) => {
    response.set("Content-Type", "application/json");
    await sendEmailServices(request.body);
}