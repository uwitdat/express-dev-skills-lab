const skills = [
    {id: 1, skill: 'vast knowledge of CSS and HTML'},
    {id: 2, skill: 'unmatched speed and skills with JS arrays'},
    {id: 3, skill: 'set world record for fastest .forEach application'},
    {id: 4, skill: 'wishing I knew C#'},
];
//NEEDS BOTH .EJS FILE AND CONTROLLER FILE
function showAll(){
    return skills;
}

//NEEDS BOTH .EJS FILE AND CONTROLLER FILE
function showOne(id){
    return skills[id-1];
}

function createNew(skillObj){
    const skillId = skills[skills.length - 1].id + 1
    const newSkill = {
        id: skillId,
        skill: skillObj.skill       
    };
    skills.push(newSkill)
}

function deleteOne(id){
    const index = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(index, 1); 
}

module.exports ={
    showAll, 
    showOne,
    createNew,
    deleteOne,

}