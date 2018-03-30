'use strict';

const logger = require('../Config/Logger');
const path=require("path");
const ejs = require('ejs');
const fs = require('fs');
const Sample = require('../Models/Sample');

exports.getDashBoard = (req, res, next) => {
	Sample.findAll(function(err, result) {
		if (err){
			next(err);			
		}
		if(!result){
			next(new ProductNotFoundError("No Product items found for given id"+productId));
		}
		else{
  			let values= {
				lable1:JSON.stringify(result.labels),
				dataArr1:JSON.stringify(result.values)
			};

			let path4 = path.join(__dirname + '/../Public/Templates/index.html');
			let htmlContent = ejs.render(fs.readFileSync(path4, 'utf8'),{chart: values});
	    	res.end(htmlContent);

	    }	
	});

	
	logger.info("Getting store products...");
};
