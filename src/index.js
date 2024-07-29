module.exports = function reverse(n) {
	let b = n.toString().split('').reverse()
	b.filter((el) => {
		if (el == '-') {
			let a = b.pop(el)
			a = '+'
			b.unshift(a)
		}
	})
	let c = b.join('')

	return Number(c)
}
