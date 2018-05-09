const fs = require('fs');
const path = require('path');
const command = process.argv[2];
const task = process.argv[3];
const indexRemove = parseInt(task);
let text="";
let contents = [];
let count = 0;

const list = path.join(__dirname, 'list.txt');

if (command == 'add') {

	fs.appendFileSync(list, `\n${task}`);

} else if (command == 'show') {


	contents = fs.readFileSync(list, 'utf-8').toString().split('\n').slice(3);
	contents.pop();



	contents.forEach(function(element) {
			count++;
      text=text+`\n${count}: ${element}`
	});
	console.log(contents);
	console.log(text);
}else if(command == "remove"){
	contents = fs.readFileSync(list, 'utf-8').toString().split('\n');
	contents.splice(indexRemove+2,1);
	console.log(contents);
contents.pop();

	fs.writeFileSync(list, "");

	contents.forEach(function(element) {
		fs.appendFileSync(list, `${element}\n`)

		});


}
