const Skills = require('../models/skill')

module.exports = {
    index,
    show,
    newSkill,
};


function index(req, res) {
    res.render('skills/index', {
        skills: Skills.getAll(),
        title: "Developer Skills:"
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skills.getOne(req.params.id),
        title: Skills.getOne(req.params.id).skill,
    });
}

function newSkill(req, res) {
    res.render('skills/new', {
        title: 'New Skill',
    });
}