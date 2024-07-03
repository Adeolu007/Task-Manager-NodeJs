const express = require("express")
const Task = require("../models/task.model.js")
// please confirm that you don't have to install any npm package inorder to use this router
const router = express.Router();
const { createTask, updateTask, getTask, getTasks, deleteTask } = require('../controllers/task.controller.js')

router.post('/', createTask)
router.get('/', getTask)
router.get('/', getTasks)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router;