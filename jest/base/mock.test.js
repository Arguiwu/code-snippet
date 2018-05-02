function forEach(items, callback) {
	for(let i = 0; i < items.length; i++) {
		callback(items[i]);
	}
}

const mockCallback = jest.fn();
forEach([0, 1], mockCallback);

test('mockCallback must call 2', () => {
	expect(mockCallback.mock.calls.length).toBe(2)
})