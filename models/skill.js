const Skills = [
    {skill: 'General', proficiencies: ['Using git/github', 'Using MVC architechture', 'Working as part of a dev team']},
    {skill: 'CSS', proficiencies: ['Creating Animations','Customizing HTML Layouts','Styling HTML webpages', 'Using CSS frameworks']},
    {skill: 'JavaScript', proficiencies: ['DOM manipulation','Working with asynchronous functions','Object-oriented design']},
    {skill: 'HTML', proficiencies: ['Creating dynamic, responsive webpages', 'Using symantic elements'] },
    {skill: 'Node.js', proficiencies: ['Using Express to handle routing']}
]

module.exports = {
    getAll,
    getOne,
}

function getAll() {
    return Skills;
}

function getOne(name){
    return Skills.find(skill => skill.skill === name);
}