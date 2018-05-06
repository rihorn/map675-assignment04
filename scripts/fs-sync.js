"use strict"

// require the fs module
var fs = require('fs');

// read the file with a synchronous fs request
var rawData = fs.readFileSync(__dirname + '/../project-files/cartocolors.json');

// use JSON.parse() to parse raw string to JSON
var data = JSON.parse(rawData);

// create a new object with key 'Emrld' and value the object
var outputData = {'Earth': data['Earth'] };

// write the output file, stringifying the JS object
fs.writeFileSync(__dirname + '/../data/earthcolors.json', JSON.stringify(outputData));

console.log('data/earthcolors.json written to file!');