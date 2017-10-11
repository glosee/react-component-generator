#! /usr/bin/env node
const fs = require('fs');
const Handlebars = require('handlebars');
const minimist = require('minimist');
const path = require('path');

const warnAndExit = (err) => {
	console.error(err);
	process.exit(2);
}

/**
 * Required arguments:
 * --type ['class', 'function'] - determines wether to use a class or not
 * --name - the name of the component/class
 * --path - the path to put the file in eg. 'webpack/components/items'
 */
const args = minimist(process.argv.splice(2));
let {
	connected,
	name,
	path: _path,
	type = 'class'
} = args;
if (!name) warnAndExit('ERROR: must pass name');
// Connected overrides 'class' or 'function', as you can't have a connected function
if (connected) type = 'connected';
if (!_path) _path = './';
const outputPath = `${_path}/${name}.js`;

fs.readFile(path.resolve(__dirname, `templates/${type}.hbs`), 'utf-8', (err, src) => {
	if (err) warnAndExit(err);
	const template = Handlebars.compile(src, {noEscape: true});
	const result = template({name});
	fs.writeFile(path.resolve(process.cwd(), outputPath), result, (err, data) => {
		if (err) warnAndExit(err);
		console.log(`Success! See ${outputPath} for results`);
		process.exit(0);
	});
});




