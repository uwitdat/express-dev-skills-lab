const Skill = require('../models/skill')

function showAllSkills(req, res){
    res.render('skills/skills', {
    skills: Skill.showAll()    
    });
}

module.exports = {
    showAllSkills,
}