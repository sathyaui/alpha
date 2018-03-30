'use strict';

const mongoose = require('mongoose'),
Schema = mongoose.Schema;

let sampleSchema = new Schema({
      labels:[String],
      values:[Number]
    },{ collection: 'Sample' });

let Sample = mongoose.model("Sample", sampleSchema);

let findAll=  ( next) => {
	Sample.findOne({}, function(err, result) {
		if (err) next(err);
		next(null, result);
	}); 
};

module.exports = {
    Sample,
    findAll
};
