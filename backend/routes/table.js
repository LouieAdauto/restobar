const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const { getTables, createTable, getTable, updateTable, deleteTable } = require('../controllers/table')


//ROUTES
router.route('/')
    .get(protect, getTables)
    .post(protect, createTable)

router.route('/:id')
    .get(protect, getTable)
    .put(protect, updateTable)
    .delete(protect, deleteTable)

module.exports = router;