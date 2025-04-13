import User from "../models/user.model.js";
import Message from "../models/message.model.js";

export const getUsersForSidebar = async(req,res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne:loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar:",error.message);
        res.status(500).json({error:"Internal server error"});
    }
};

export const getMessages = async(req,res)=>{
    try {
        const {id:userToChatId} = req.params
        //const senderId=req.user._id;
        const myId=req.user._id;
        const message = await Message.find({
            // this is an array
            $or:[
                {myId:myId,receiverId:userToChatId},
                {myId:userToChatId,receiverId:myId}
            ]
        })

    res.status(200).json(message)
    } catch (error) {
          console.log("Error in getMessage controller:",error.message);
          res.status(500).json({error:"Internal server error"});
    }
}

export const sendMessage = async(req,res)=>{
    try {
         const {text,image} = req.body;
         const {id: receiverId} = req.params;
         const senderId = req.user._id;
         
         let imageUrl;
         if(image){
            //Upload base64 image to cloudinary
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
         }
         //create the message
         const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image:imageUrl,
         });


         //save it to the database
         await newMessage.save();

         //send the response back
         res.status(201).json(newMessage);
         //realtime functionality goes here => socket.io




    } catch (error) {
        console.log("Error in send message controller",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}