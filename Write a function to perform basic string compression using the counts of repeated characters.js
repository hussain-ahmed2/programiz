function compressString(str) {
	let res = "",
		count = 0;

	str.split("").reduce((acc, char) => {
		if (acc === char) {
			count++;
		} else {
			res += acc + count;
			count = 1;
		}
		return char;
	}, str[0]);
	res += str[str.length - 1] + count;
	return res.length < str.length ? res : str;
}
