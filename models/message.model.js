import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        text: {
            type: String,
        },
        image: {
            type: String
        },
        messageType: {
            type: String,
            enum: ['text', 'image'],
            default: 'text'
        },
        status: {
            type: String,
            enum: ['sent', 'seen'],
            default: 'sent'
          }
    },
    { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);

export default Message;