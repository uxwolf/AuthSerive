const { User } = require("../models/index");

class UserRepository { 

    async create(data){
        try {
            const user = await User.create(data);
            return user;
            
        } catch (error) {
            console.log("Something went wrong on repository");
            throw error;
        }
    }
    async destroy(userId){
        try {
            const response = await User.destroy({
                where : {
                    id: userId

                }
            });
            return true;
            
        } catch (error) {
            console.log("Something went wrong on repository");
            throw error;
        }
    }

    async getById(userId){
        try {
            const user = await User.findByPk(userId, {
                attributes: [ 'email', 'id'] 
            });
            return user;
            
        } catch (error) {
            console.log("Something went wrong on repository");
            throw error;
        }
    }
}

module.exports = UserRepository;