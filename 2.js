'use strict';

function countBasketPrice(basket) {
	let sum = 0;
	for (let obj of basket) 
		sum += obj.price * obj.amount;
	return sum;
}

let MyBasket = [
	{name: 'Яблоко', price: 10, amount: 5},
	{name: 'Банан', price: 35, amount: 3},
	{name: 'Груша', price: 25, amount: 1}
];

console.log(countBasketPrice(MyBasket));
