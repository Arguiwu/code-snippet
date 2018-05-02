test('test 2 plus 2 should equal 4', () => {
	expect(2 + 2).toBe(4);
});

test('Object assignment', () => {
	const data = {one: 1};
	data['two'] = 2;
	expect(data).toEqual({one:1, two: 2});
});

test('adding floating point numbers', () => {
	expect(0.1 + 0.2).toBeCloseTo(0.3);
})