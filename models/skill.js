const skills = [
    {id: 1, skill: 'vast knowledge of CSS and HTML'},
    {id: 2, skill: 'unmatched speed and skills with JS arrays'},
    {id: 3, skill: 'set world record for fastest .forEach application'},
    {id: 4, skill: 'wishing I knew C#'},
];

function showAll(){
    return skills;
}

//NEEDS .EJS FILE AND CONTROLLER FUNCTION
function showOne(id){
    return skills[id-1];
}

module.exports ={
    showAll, 
    showOne,
}