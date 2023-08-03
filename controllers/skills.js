const Skill = require("../models/skill");

module.exports = {
  index,
  show,
  newProf,
  createProf,
  deleteProf,
  editProf,
  updateProf,
};

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
    title: "Developer Skills:",
  });
}

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
    title: Skill.getOne(req.params.id).skill,
  });
}

function newProf(req, res) {
  res.render("skills/new", {
    skill: Skill.getOne(req.params.id),
    title: `New ${req.params.id} Skill`,
  });
}

function createProf(req, res) {
  Skill.createProf(req.params.id, req.body);
  res.redirect("/skills");
}

function deleteProf(req, res) {
  Skill.deleteProf(req.params.id, req.params.index);
  res.redirect(`/skills/${req.params.id}`);
}

function editProf(req, res) {
  res.render("skills/edit", {
    skill: Skill.getOne(req.params.id),
    index: req.params.index,
    title: `Edit ${req.params.id}`,
  });
}

function updateProf(req, res) {
    Skill.updateProf(req.params.id, req.params.index, req.body)
  res.redirect(`/skills/${req.params.id}`);
}
