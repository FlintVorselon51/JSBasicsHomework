'use strict';
let primes = [];
let i = 2;
loop1: while (i < 100) {
	for (let number of primes) {
		if (i % number == 0) {
			++i;
			continue loop1;
		}
	}
	primes.push(i);
	console.log(i++);
}
