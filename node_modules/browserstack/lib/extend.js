module.exports = function(a, b) {
	for (var p in b) {
		a[p] = b[p];
	}

	return a;
};
