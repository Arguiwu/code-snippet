const sum = require('./sum');

test('test  plus 2 result', () => {
	expect(sum(1, 2)).toBe(3);
});

test('test 2 plus 2 should equal 4', () => {
	expect(sum(2, 2)).toBe(4);
});