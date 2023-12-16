import { param } from "express-validator";
import { postModel } from "../models/post-models.js";

export async function ctrlCreatePost(req, res) {

    const { title, content, image } = req.body;

    const author = req.user.id;
    if (!req.user.isAdmin) return res.sendStatus(401);

    postModel.create({ title, content, image, author });

    res.status(201).json(post);

}



export async function ctrlGetAllPost(req, res) {

    const user = req.user;

    const posts = postModel.allpost();

    const postOfUser = posts.filter((post) => post.author === user.name);

    await res.json(postOfUser);
};

export function ctrlGetByPost(req, res) {

    const { postId } = req.param;
    const post = postModel.byId({ id: postId });
    if (!post) {
        return res.status(400).json(post);
    }
};

export function ctrlUpdatePost(req, res) {
    const { postId } = req.param;

    const { title, content, image } = req.body;

    postModel.update(postId, { title, content, image });

    res.sendStatus(200);
};

export function ctrlDeletePost(req, res) {
    const { postId } = req.param;
    postModel.delete({ id: postId });
    res.sendStatus(200);
}