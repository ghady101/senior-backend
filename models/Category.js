const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "can't be blank"],
		},
		pictures: {
			type: Array,
			required: [true, 'cant be blank'],
		},
	},
	{ minimize: false }
);

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
