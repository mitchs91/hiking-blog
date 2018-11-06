'use strict';

// var $ = require('jquery');
var requirejs = require('requirejs');
var Post = require('../_modules/posts');

$(function() {
  new Posts(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});