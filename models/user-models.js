import bcrypt from "bcrypt";//ai alguna libreria no funciona el impor o expot utilizar import * as bcrypt(nombre de la libreria) from "bcrypt";
import { v4 as uuid } from "uuid";

export let listUsers = [];

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
        id: uuid(),
        name,
        lastName,
        image,
        email,
        password: hasedPassword,
        isAdmin: name === "rienzo",
    };

    listUsers.push(newUser);
    return newUser;
};

const getAllUsers = () => {
    return [...listUsers];
};

const getUserById = ({ id }) => {
    const user = listUsers.find((user) => user.id === id);

    return user;
};

export const getUSerByEmail = ({ email }) => {
    const user = listUsers.find((user) => user.email === email);
    return user;

}

export const loginUser = async ({ email, password }) => {
    const user = getUSerByEmail({ email });

    if (!user) {
        return null;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return null;
    }
    return user;

};
const findUserByIdAndUpdate = (id, data) => {
    listUsers = listUsers.map((user) => {
        if (user.id === id) {
            if (data.name) user.name = data.name
            if (data.lastName) user.lastName = data.lastName
            if (data.image) user.image = data.image
            if (data.email) user.email = data.email
            if (data.password) user.password = data.password

            return user;
        }
        return user;
    });
};

const deleteUser = ({ id }) => {
    listUsers = listUsers.filter((user) => user.id !== id)
}
export const userModel = {
    create: createNewUser,
    allUsers: getAllUsers,
    byId: getUserById,
    update: findUserByIdAndUpdate,
    delete: deleteUser, 
}