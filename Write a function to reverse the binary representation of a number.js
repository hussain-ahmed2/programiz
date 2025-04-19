function reverseBinary(num) {
	const binary = [];

	while (num) {
		binary.push(num % 2);
		num = Math.floor(num / 2);
	}

	binary.reverse();

	const length = binary.length;
	let res = 0;
	for (let i = 0; i < length; i++) {
		res += binary[i] * Math.pow(2, i);
	}

	return res;
}
