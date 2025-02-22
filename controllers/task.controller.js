const Task = require("../models/task.model");

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).join(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByAndUpdate(id, req.body);
        if (!task) {
            return res.status(404).json({ message: "Task not found" })
        }
        const updatedTask = await Task.findById(id);
        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}


const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id)
        if (!task) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.status(200).json({ message: "Product deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createTask, updateTask, getTask, getTasks, deleteTask
} 