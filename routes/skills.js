var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);
router.get('/:id/new', skillsCtrl.newProf);

router.post('/:id', skillsCtrl.createProf);

router.delete('/:id/:index', skillsCtrl.deleteProf);

module.exports = router;
