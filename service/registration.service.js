const fs = require('fs-extra');
const path = require('path');
const DB = require('../dataBase/usersMass.json')

const usersPath = path.join(process.cwd(), 'dataBase', 'usersMass.json');

module.exports = {

    createUser: async (userObject) => {
        const users = await fs.readFile(usersPath);
        const parse = JSON.parse(users.toString());
        parse.push(userObject);
        await fs.writeFile(usersPath, JSON.stringify(parse));
    },

    findUserByLogin: async (userName) => {
        const users = await fs.readFile(usersPath);
        const parse = JSON.parse(users);
        const userData = userName.name;
        let find = parse.find(el => el.name.toString() === userData);
        return await find;
    },

    showAllUsers: async () => {
        const users = await fs.readFile(usersPath);
        return JSON.parse(users.toString());
    },
}
