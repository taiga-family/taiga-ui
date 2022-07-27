import {TuiValidationError} from '../validation-error';

describe(`TuiValidationError`, () => {
    it(`with content and context`, () => {
        const error = new TuiValidationError(`content`, {test: `context`});

        expect(error.message).toBe(`content`);
        expect(error.context?.test).toBe(`context`);
    });
});
