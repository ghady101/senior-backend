const mongoose = require('mongoose');

const BannerSchema = mongoose.Schema(
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

const Banner = mongoose.model('Banner', BannerSchema);
module.exports = Banner;
