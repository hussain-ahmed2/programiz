function calculateFinalPosition(instructions) {
	return instructions.split('').reduce((acc, elem) => {
        if (elem === 'U') acc[1]++;
        else if (elem === 'D') acc[1]--;
        else if (elem === 'L') acc[0]--;
        else if (elem === 'R') acc[0]++;

        return acc;
    }, [0, 0]);
}
