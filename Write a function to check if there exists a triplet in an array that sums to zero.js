function findTriplets(arr) {
	const length = arr.length;
	let left = 0,
		right = length - 1,
		middle = 1,
		toggleMiddle = false;

	while (left < right) {
		if (arr[left] + arr[middle] + arr[right] === 0) return true;

		if (!toggleMiddle) {
			if (middle === left + 1) middle = right - 1;
			else middle = left + 1;

			toggleMiddle = !toggleMiddle;
			continue;
		}

		if (arr[left] > arr[right]) {
			right--;
		} else {
			left++;
		}
		toggleMiddle = !toggleMiddle;
	}

	return false;
}