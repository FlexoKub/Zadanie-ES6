'use strict';

let employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
let nameCourse = 'Базовый React';
let command = [];
for (let i = 0; i < employers.length; i++) {
	if (employers[i].length > 0 && employers[i].trim() !== '') {
		command.push(employers[i]);
	}
}
for (let i = 0; i < command.length; i++) {
	command[i] = command[i].toLowerCase().trim();
	command[i] = command[i][0].toUpperCase() + command[i].slice(1);
}

let data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};
const {
	cash,
	react,
	add
} = data;

function calcCash(own=0) {
	let total = 0;
	own.forEach(element => {
		total += +element;
	});
	return total;
}

let lesson = calcCash(cash);

function makeBusiness(director, teacher = 'Максим', allModule, gang, course) {
	
	let sumTech = react.concat(add, 'и другие');
	console.log('Стартуем новый курс: "' + course + '". Владелец: ' + director + ', преподаватель: ' + teacher + '. Всего уроков: ' + allModule + '. \nКоманда Академии: ' +
		gang);
	console.log('Первое что изучим будет ' + react[0] + ". Он очень похож на HTML!");
	console.log('Технологии которые мы изучим: ');
	console.log(...sumTech);

}
const arr = ['Артем', , lesson, command, nameCourse];
makeBusiness(...arr);
