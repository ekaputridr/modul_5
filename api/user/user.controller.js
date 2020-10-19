const{
    serviceAddUser,
    serviceGetUsers
} = require("./user.service")

const { genSaltSync, hashSync, compareSync} = require("bcrypt");
module.exports = {
    controllerAddUser: (req, res)=>{
        const hasilInput = req.body;
        const salt = genSaltSync(10);
        hasilInput.password = hashSync(hasilInput.password, salt);
        serviceAddUser(hasilInput, (err, results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "failed add new user"
                })
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },

controllerGetUsers: (req, res) => {
    serviceGetUsers((err, results)=>{
        if(err){
            console.log(err)
            return
        }else{
            return res.json({
                success: 1,
                data: results
            })
        }
    })
}
}
