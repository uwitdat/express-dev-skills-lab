const Skill = require('../models/skill')

function showAllSkills(req, res){
    res.render('skills/skills', {
    skills: Skill.showAll()    
    });
}

function showOneSkill(req, res){
    res.render('skills/showSkill', {
        skills: Skill.showOne(req.params.id)
    })
}

module.exports = {
    showAllSkills,
    showOneSkill,
}