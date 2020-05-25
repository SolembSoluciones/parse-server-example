'use strict';

const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.get('/', authController.login);
router.get('/dashboard-admin', authController.dashboard);

module.exports = router;