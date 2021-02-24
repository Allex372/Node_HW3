const fs = require('fs-extra');
const path = require('path');

const usersPath = path.join(process.cwd(), 'dataBase', 'usersMass.json');

module.exports = {
    findUsers: async (info) => {
        const users = await fs.readFile(usersPath);
        const parse = JSON.parse(users.toString());
        return parse.filter(value => Object.keys(info).every(e => info[e] === value[e]));
    },

    findUserById: async (userID) => {
        const users = await fs.readFile(usersPath);
        const parse = JSON.parse(users.toString());
        return (parse)[userID];
    },

    createUser: async (userObject) => {
        const users = await fs.readFile(usersPath);
        const parse = JSON.parse(users.toString());
        parse.push(userObject);
        await fs.writeFile(usersPath, JSON.stringify(parse));
    },

    deleteUser: async (id) => {
        const users = await fs.readFile(usersPath);
        const parse = JSON.parse(users.toString());

        parse.splice(id, 1);
        await fs.writeFile(usersPath, JSON.stringify(parse));
    }
}
