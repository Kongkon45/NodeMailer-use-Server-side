const express = require("express");
const { getAllUsers, postUser, deleteUser } = require("../controller/userController");
const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users", postUser);
router.delete("/users/:id", deleteUser)


module.exports = router;