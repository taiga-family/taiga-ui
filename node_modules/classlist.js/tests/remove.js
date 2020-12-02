QUnit.module("classList.remove");

QUnit.test("Removes duplicated instances of class", function(assert) {
	var el = document.createElement("p"), cList = el.classList;
	el.className = "ho ho ho"

	cList.remove("ho");
	assert.ok(!cList.contains("ho"), "Should remove all instances of 'ho'");
	assert.strictEqual(el.className, "")
});
