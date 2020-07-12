function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a- b;
}

function sum (arr) {
	return arr.reduce((a,b) => a+b, 0);
}

function multiply (arr) {
	return arr.reduce((a, b) => a*b, 1);
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	let res = 1;
	for(let i = 1; i <= a; i ++){res*=i;}
	return res;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}