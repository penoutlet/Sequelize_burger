var express = require('express');
var app = express.Router();
var db = require('../models');

module.exports = function(app){
app.get('/', function(req,res){
	db.burger.findAll({}).then(function(results){
		var hbsburger = {
			burgers: results
		};
		// res.json(dbburger);
	res.render('index', hbsburger);
	});
});

app.post('/', function(req,res){
	db.burger.create(req.body, {
		
	}).then(function(results){
		console.log(res.json(results));
		// console.log("req.body" + req.body);
		res.redirect("/");
	});
});

app.delete('/:id', function(req,res){
	db.burger.destroy({
		where: {
			id: req.params.id
		}
		
	}).then(function(results){
		console.log(res.json(results));
		res.redirect("/");
	});
});

app.put('/:id', function(req,res){
	db.burger.update(
		req.body,
		{
		where: {
			id: req.params.id
		}
	}).then(function(results){
		console.log(res.json(results));
		res.redirect("/");
	});
});
};