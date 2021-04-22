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

function getNewSkill(req, res){
    res.render('skills/newSkill');
}


function createNewSkill(req, res){
    Skill.createNew(req.body);
    res.redirect('/skills')
}
module.exports = {
    showAllSkills,
    showOneSkill,
    getNewSkill,
    createNewSkill,

}