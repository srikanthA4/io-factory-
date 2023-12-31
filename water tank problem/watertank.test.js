// import { waterCapacity } from `./watertank.js`;
const { waterCapacity } = require(`./watertank`)

// Basic Test Cases


console.log(`Starting test 1 - waterCapacity([0,4,0,0,0,6,0,6,4,0])`);
const test1 = waterCapacity([0,4,0,0,0,6,0,6,4,0]);
if (test1 !== 18) {
	console.log(`waterCapacity([0,4,0,0,0,6,0,6,4,0]) fails - Expected - 18 Receieved - ${test1}`);
	return;
}
console.log(`Test1 Successful - Expected - 18 Receieved - ${test1}`);



console.log(`Starting test 2 - waterCapacity([0, 3, 0 , 0 , 2, 0, 4, 0 ])`);
const test2 = waterCapacity([0, 3, 0 , 0 , 2, 0, 4, 0 ]);
if (test2 !== 10) {
	console.log(`waterCapacity([0, 3, 0 , 0 , 2, 0, 4 ]) fails - Expected - 10 Receieved - ${test2}`);
	return;
}
console.log(`Test2 Successful - Expected - 10 Receieved - ${test2}`);


console.log(`Starting test 3 - waterCapacity([0, 1, 0, 0])`);
const test3 = waterCapacity([0, 1, 0, 0]);
if (test3 !== 0	) {
	console.log(`waterCapacity([0, 1, 0, 0]) fails - Expected - 0	Receieved - ${test3}`);
	return;
}
console.log(`Test3 Successful - Expected - 0	Receieved - ${test3}`);


console.log(`Starting test 4 - waterCapacity([5,5,5,5])`);
const test4 = waterCapacity([5,5,5,5]);
if (test4 !== 0	) {
	console.log(`waterCapacity([5,5,5,5]) fails - Expected - 0	Receieved - ${test4}`);
	return;
}
console.log(`Test4 Successful - Expected - 0	Receieved - ${test4}`);