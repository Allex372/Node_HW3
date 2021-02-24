const fs = require('fs-extra');
const path = require('path');

const usersPath = path.join(process.cwd(), 'dataBase', 'usersMass.json');

module.exports = {
    findUsers: async () => {
        const users = await fs.readFile(usersPath);

        return JSON.parse(users.toString());
    },

    findUserById: async (userID)=>{
        const users = await fs.readFile(usersPath);

        return JSON.parse(users)[userID];
    },

    createUser: async (userObject) => {
        const users = await fs.readFile(usersPath);
        JSON.parse(users.toString()).push(userObject);

        await fs.writeFile(usersPath, JSON.stringify(users));
    }
}
