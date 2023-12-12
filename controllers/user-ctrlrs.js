import { listUsers, userModel, loginUser } from "../models/user-models.js";
import  jwt  from "jsonwebtoken"; 


export async function ctrlCreateUser(req, res) {

    const { name, lastName, image, email, password } = req.body;

    const user = await userModel.create({ name, lastName, image, email, password });

    res.status(201).json(user);

}

export async function ctrlrsLoginUser(req, res) {
    const { email, password } = req.body;
   
    const user = await loginUser({ email, password });

    if (!user) return res.sendStatus(404);
    
    const token = jwt.sign({ userId: user.id }, "Secret");

    res.status(200).json({token}); 
}

export async function ctrlGetAllUser(req, res) {

    await res.json(listUsers);
};

export function ctrlGetByUser(req, res) {

    const { userId } = req.param;

   const user = userModel.byId({ id: userId }); 
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