import { UserModel, getAllUsers, loginUser } from "../models/user-models.js";
import  jwt  from "jsonwebtoken"; 
import { param } from "express-validator";

export async function ctrlCreateUser(req, res) { 
try {
    const { name, lastName, image, email, password } = req.body;

    const user = await userModel.create({ name, lastName, image, email, password });

    res.status(201).json(user);

    } catch (error) {
        res.status(400).json(error);
    }
}

export async function ctrlrsLoginUser(req, res) {
    const { email, password } = req.body;
   
    const user = await loginUser({ email, password });

    if (!user) return res.sendStatus.json("no se encontro");
    
    const token = jwt.sign({ userId: user.id }, "Secret");

    res.status(200).json({token}); 
}

export async function ctrlGetAllUser(req, res) {
    try {
    const getAllUsers = await UserModel.find({}, ["-_v"])
    .populate( "tasks" );
    await res.json(getAllUsers);
    } catch{
        console.log("error")
        res.status(500).json("error");
    }
};

export const ctrlGetByUser =  async(req, res)=> {

    const { userId } = req.params;

   const user = await UserModel.findById({ _id: userId })
   .populate( "tasks" );; 
    if (!user) {
        return res.sendStatus(404);
     }
    res.status(200).json(user);
};

export function ctrlUpdateUser(req, res) {
    const { userId } = req.param;

    const { name, lastName, image, email, password } = req.body;

    userModel.update(userId, { name, lastName, image, email, password });

    res.sendStatus(200);
};

export function ctrlDeleteUser(req, res) {
    const { userId } = req.param;
    userModel.delete({ id: userId });
    res.sendStatus(200);
}