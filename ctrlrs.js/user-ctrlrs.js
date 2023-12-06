import { listUsers } from "../models.js/user-models.js";

export function ctrlCreateUser(req, res) {
    const { username, name, lastName, image } = req.body;
    listUsers.push(req.body);
    res.sendStatus(201);
}
export function ctrlGetAllUser(req, res) {
    res.json(listUsers);
};

