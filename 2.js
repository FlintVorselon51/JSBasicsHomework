'use strict';

function countBasketPrice(basket) {
	let sum = 0;
	for (let i of basket) 
		sum += i[1] * i[2];
	return sum;
}

let MyBasket = [
	// [Название, Стоимость, Количество]
	['Яблоко', 10, 5],
	['Банан', 35, 3],
	['Груша', 25, 1]
];

console.log(countBasketPrice(MyBasket));
