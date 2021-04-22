//mount express
var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

//get skills page
router.get('/', skillsCtrl.showAllSkills);
router.get('/new', skillsCtrl.getNewSkill);
router.get('/:id', skillsCtrl.showOneSkill);

//post requests
router.post('/', skillsCtrl.createNewSkill);

module.exports = router

