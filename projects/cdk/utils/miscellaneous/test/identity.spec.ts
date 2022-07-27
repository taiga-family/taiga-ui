import {identity} from '../identity';

describe(`identity`, () => {
    it(`returns the same instance`, () => {
        const test = {test: `test`};

        expect(identity(test)).toBe(test);
    });
});
