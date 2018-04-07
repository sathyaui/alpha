'use strict';

const logger = require('../Config/Logger');
const path=require("path");
const ejs = require('ejs');
const fs = require('fs');
const Sample = require('../Models/Sample');

exports.getDashBoard = (req, res, next) => {
	let path4 = path.join(__dirname + '/../Public/Templates/index.html');
	let htmlContent = ejs.render(fs.readFileSync(path4, 'utf8'));
	res.end(htmlContent);
	
	logger.info("Getting store products...");
};
