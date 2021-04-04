'use strict';

function to_obj(n) {
	if (n < 0 || n > 999) {
		console.log(`Bad number ${n}`);
		return {};
	}
	return {
		'единицы': n % 10,
		'десятки': parseInt(n / 10 % 10),
		'сотни': parseInt(n / 100)
	};
}

console.log(to_obj(123));
console.log(to_obj(-42))
