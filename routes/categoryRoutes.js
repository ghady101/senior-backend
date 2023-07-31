const router = require('express').Router();
const Category = require('../models/Category');
const User = require('../models/User');

//get category;
router.get('/', async (req, res) => {
	try {
		const categories = await Category.find();
		res.status(200).json(categories);
	} catch (e) {
		res.status(400).send(e.message);
	}
});

//create category
router.post('/', async (req, res) => {
	try {
		const { name, images: pictures } = req.body;
		const category = await Category.create({
			name,
			pictures,
		});
		const categories = await Category.find();
		res.status(201).json(categories);
	} catch (e) {
		res.status(400).send(e.message);
	}
});

// delete category
router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const { user_id } = req.body;
	try {
		const user = await User.findById(user_id);
		if (!user.isAdmin) return res.status(401).json("You don't have permission");
		await Category.findByIdAndDelete(id);
		const categories = await Category.find();
		res.status(200).json(categories);
	} catch (e) {
		res.status(400).send(e.message);
	}
});

module.exports = router;
