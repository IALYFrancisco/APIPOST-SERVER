export const sendEmail = async (request, response) => {
    response.set("Content-Type", "application/json");
    response.status(200).json("Hello user");
    console.log(request.body);
}