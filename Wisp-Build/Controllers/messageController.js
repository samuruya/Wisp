const messageModel = require("../Models/messageModel")


const createMessage = async(req, res) => {
    const { chatId, senderId, text } = req.body

    const message = new messageModel({
        chatId, senderId, text
    })

    try {
        const response = await message.save()
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}







module.exports = { createMessage }