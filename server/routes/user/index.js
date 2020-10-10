const express = require('express');

const router = express.Router();
const UserController = require('../../controllers/user');

router.post('/', UserController.createUser);
router.get('/', UserController.retrieveUsers);
router.delete('/', UserController.deleteUser);
router.put('/', UserController.updateUser);

module.exports = router;
