//mount express
var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

//get skills page
router.get('/', skillsCtrl.showAllSkills)

module.exports = router

