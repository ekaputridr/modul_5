const {
    controllerAddUser,
    controllerGetUsers,
    controllerUpdateUser,
    controllerDeleteUser
} = require("./user.controller");
  
const router = require("express").Router();

router.post("/add", controllerAddUser);
router.get("/get", controllerGetUsers);
router.patch("/update", controllerUpdateUser);
router.delete("/delete", controllerDeleteUser);

module.exports = router;