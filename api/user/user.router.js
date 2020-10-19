const {
    controllerAddUser,
    controllerGetUsers
} = require("./user.controller");
  
const router = require("express").Router();

router.post("/add", controllerAddUser);
router.get("/get", controllerGetUsers);

module.exports = router;