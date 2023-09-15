const mongoose = reqire("mongoose")

const messageSchema = new mongoose.Schema({
    chatId: String,
    senderId: String,
    text: String
},
{
    timestamps: true
})

const messageModel = mongoose.model("Message", messageSchema);

module.exports = messageModel;