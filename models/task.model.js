const { Schema, model } = require('mongoose')

const taskSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: [true, 'please provide name'],
	},
	completed: {
		type: Boolean,
		default: false,
	},
})

const Tasks = model('Task', taskSchema)

module.exports = { Tasks };