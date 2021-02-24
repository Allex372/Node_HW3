const fs = require('fs-extra');
const path = require('path');

const usersPath = path.join(process.cwd(), 'dataBase', 'usersMass.json');

module.exports = {

    findUser: async (userID)=>{
        const users = await fs.readFile(usersPath);

        return JSON.parse(users)[userID];
    }

}
