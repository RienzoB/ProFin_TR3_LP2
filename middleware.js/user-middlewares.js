export function validateUsers(req, res, next) {
    const { username, name, lastName, image } = req.body;

    if (req.url === "/user" && req.method === "POST") {

        if (!username || !name || !lastName || !image)
            return res.sendStatus(400);
    }
    next();

};