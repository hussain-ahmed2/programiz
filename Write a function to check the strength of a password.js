function checkPasswordStrength(password) {
	const length = password.length;

	if (
		length >= 8 &&
		password.match(/[0-9]/g) &&
		password.match(/[a-z]/g) &&
		password.match(/[A-Z]/g) &&
		password.match(/[!@#\$%\^\&*\)\(+=._-]/g)
	) return "Strong";
	

	if (length >= 6 && password.match(/[0-9]/g) && password.match(/[a-zA-Z]/g)) return "Medium";

	return "Weak";
}
