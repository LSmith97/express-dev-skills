var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);
router.get('/:id/new', skillsCtrl.newProf);
router.get('/:id/:index/edit', skillsCtrl.editProf);

router.post('/:id', skillsCtrl.createProf);

router.delete('/:id/:index', skillsCtrl.deleteProf);

router.put('/:id/:index/', skillsCtrl.updateProf);

module.exports = router;
