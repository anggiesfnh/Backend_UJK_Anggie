const express = require('express');
const siswaController = require('../controllers/siswaControllers');
const { validationBodySiswa } = require('../middleware/validation');

const router = express.Router();

router.get('/', siswaController.getAllSiswa);
router.get('/:id', siswaController.getAllSiswaById);
router.post('/', validationBodySiswa, siswaController.createSiswa);
router.put('/:id', validationBodySiswa, siswaController.updateSiswa);
router.delete('/:id', siswaController.deleteSiswa);

module.exports = router;