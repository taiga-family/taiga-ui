QUnit.module("classList.toggle");

QUnit.test("Adds a class", function(assert) {
	var cList = document.createElement("p").classList;

	cList.toggle("c1");
	assert.ok(cList.contains("c1"), "Adds a class that is not present");

	assert.strictEqual(
		cList.toggle("c2"),
		true,
		"Returns true when class is added"
	);
});

QUnit.test("Removes a class", function(assert) {
	var cList = document.createElement("p").classList;

	cList.add("c1");
	cList.toggle("c1");
	assert.ok(!cList.contains("c1"), "Removes a class that is present");

	cList.add("c2");
	assert.strictEqual(
		cList.toggle("c2"),
		false,
		"Return false when class is removed"
	);
});

QUnit.test("Adds class with second argument", function(assert) {
	var cList = document.createElement("p").classList;

	cList.toggle("c1", true);
	assert.ok(cList.contains("c1"), "Adds a class");

	assert.strictEqual(
		cList.toggle("c2", true),
		true,
		"Returns true when class is added"
	);

	cList.add("c3");
	cList.toggle("c3", true);
	assert.ok(
		cList.contains("c3"),
		"Does not remove a class that is already present"
	);

	cList.add("c4");
	assert.strictEqual(
		cList.toggle("c4", true),
		true,
		"Returns true when class is already present"
	);
});

QUnit.test("Removes class with second argument", function(assert) {
	var cList = document.createElement("p").classList;

	cList.add("c1");
	cList.toggle("c1", false);
	assert.ok(!cList.contains("c1"), "Removes a class");

	assert.strictEqual(
		cList.toggle("c2", false),
		false,
		"Returns false when class is removed"
	);

	cList.toggle("c3", false);
	assert.ok(
		!cList.contains("c3"),
		"Does not add a class that is not present"
	);

	assert.strictEqual(
		cList.toggle("c4", false),
		false,
		"Returns false when class was not present"
	);
});
