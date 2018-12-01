const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    familiar: Boolean,
    clasificacion: String
});

module.exports = mongoose.model('tasks', TaskSchema);