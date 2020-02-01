window.addEventListener('DOMContentLoaded', function() {

	'use strict';
	let calc = require('./parts/calc.js'),
		tabs = require('./parts/tabs.js'),
		form = require('./parts/form.js'),
		slider = require('./parts/slider.js'),
		timer = require('./parts/timer.js'),
		modal = require('./parts/modal.js');

	calc();
	tabs();
	form();
	slider();
	timer();
	modal();
});