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
    res.redirect('skills');
}

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function getSkillEdit(req, res){
    res.render('skills/editSkill', {
        skills: Skill.showOne(req.params.id)
    })
}

function edit(req, res){
    Skill.editSkill(req.params.id, req.body.skill);
    res.redirect(`/skills/${req.params.id}`)
}

module.exports = {
    showAllSkills,
    showOneSkill,
    getNewSkill,
    createNewSkill,
    delete: deleteSkill,
    getSkillEdit,
    edit,
}