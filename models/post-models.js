import bcrypt from "bcrypt";//si alguna libreria no funciona el impor o expot utilizar import * as bcrypt(nombre de la libreria) from "bcrypt";
import { v4 as uuid } from "uuid";

export let listPosts = [
{title: "Primer Post",
content: "Es Lo que Hay",
author: "Yo",
image: "www.google.com",
}];

const createNewPost = async ({
  
    title,
    content,
    author,
    image,


}) => {
    if (!title) return null;

    const newPost = {
        id: uuid(),
        title,
        content,
        author,
        image,

    };

    listPosts.push(newPost);
    return newPost;
};

const getAllPosts = () => {
    console.log("Pasa o no pasa?");
    return [...listPosts];
};

const getPostById = ({ id }) => {
    const post = listPosts.find((post) => post.id === id);

    return post;
};

const findPostByIdAndUpdate = (id, data) => {
    listUsers = listPosts.map((post) => {
        if (post.id === id) {
            if (data.title) post.title = data.title
            if (data.content) post.content = data.content
            if (data.image) post.image = data.image

            return post;
        }
        return post;
    });
};

const deletePost = ({ id }) => {
    listPosts = listPosts.filter((post) => post.id !== id)
}
export const postModel = {
    create: createNewPost,
    allpost: getAllPosts,
    byId: getPostById,
    update: findPostByIdAndUpdate,
    delete: deletePost,
}