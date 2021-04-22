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
    const newSkill = {
        id: 5,
        skill: skillObj.skill,
      }
      skills.push(newSkill)
    }






module.exports ={
    showAll, 
    showOne,
    createNew
}