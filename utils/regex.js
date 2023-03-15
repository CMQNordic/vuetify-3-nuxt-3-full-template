/* Check if value contains only digits 
	Returns true if value is made up of digits only
*/
export function digitsOnly(value) {
	return /^\d+$/.test(value);
}
