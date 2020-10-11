const express = require('express');

const router = express.Router();
const UserController = require('../../controllers/user');

router.post('/', UserController.createUser);
router.get('/', UserController.retrieveUsers);
router.put('/', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
