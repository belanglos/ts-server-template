import someFunction from './someFile';

describe('someFile', () => {
	it('returns hello world', () => {
		expect(someFunction()).toStrictEqual('Hello world!');
	});
});
