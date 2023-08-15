const router = require('express').Router();
const Banner = require('../models/Banner');

// get Banner;
router.get('/', async (req, res) => {
	try {
		const banners = await Banner.find();
		res.status(200).json(banners);
	} catch (e) {
		res.status(400).send(e.message);
	}
});

// create banner
router.post('/', async (req, res) => {
	try {
		const { name, images: pictures } = req.body;
		const banner = await Banner.create({
			name,
			pictures,
		});
		const banners = await Banner.find();
		res.status(201).json(banners);
	} catch (e) {
		res.status(400).send(e.message);
	}
});

// update banner
router.patch('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const { images: pictures } = req.body;
		const banner = await Banner.findByIdAndUpdate(id, {
			pictures,
		});
		const banners = await Banner.find();
		res.status(200).json(banners);
	} catch (e) {
		res.status(400).send(e.message);
	}
});

module.exports = router;
