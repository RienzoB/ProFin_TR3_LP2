import bcrypt from "bcrypt";//Si alguna libreria no funciona el impor o expot utilizar import * as bcrypt(nombre de la libreria) from "bcrypt";
import { Schema, Types, model } from "mongoose";

const userSchema = new Schema({
   
    name: ({
        type: String,
        required: true,
        unique: true,
    }),
    lastName: ({
         type: String, 
         required: true}),
    image: ({
         type: String, 
         required: true}),
    email: ({
         type: String,
         required: true}),
    password:({
         type: String, 
         required: true}),
    isAdmin: ({
        type: Boolean, 
        default: false}),
    tasks:[
            {
                type: Types.ObjectId,
                ref: "Task",
            },
        ],
},
    {
        timestamps: true,
    });
     

export const UserModel = model("User", userSchema);

const createNewUser = async ({
    name,
    lastName,
    image,
    email,
    password,

}) => {
    const hasedPassword = await bcrypt.hash(password, 10);
    if (!email) return null; 

    const newUser = {
        name,
        lastName,
        image,
        email,
        password: hasedPassword,
        isAdmin: name === "rienzo",
    };

   const user = await UserModel.create(newUser);
    return user;
};

export const getAllUsers = UserModel.find({})



const getUserById = async ({ id }) => {
    const user = await UserModel.findById(id);

    return user;
};

export const getUSerByEmail = async({ email }) => {
    const user = await UserModel.findOne({email});
    return user;
};

export const loginUser = async ({ email, password }) => {
  try{
      const user = await getUSerByEmail({ email });

    if (!user) { 
        return null;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return null;
    }
    return user;
    } 
    catch (error) {
        console.log(error);
    }
};
const findUserByIdAndUpdate = async(id, data) => {
   const user = await UserModel.findByIdAndUpdate(id, datos, {new: true}) 

    return user;
       
};

const deleteUser = async ({ id }) => {
   await UserModel.findByIdAndDelete(id); 
}
export const userModel = {
    create: createNewUser,
    allUsers: getAllUsers,
    byId: getUserById,
    update: findUserByIdAndUpdate,
    delete: deleteUser, 
}

