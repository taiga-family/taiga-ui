import {isCurrentTarget} from '../is-current-target';

describe(`isCurrentTarget`, () => {
    it(`Target is equal to currentTarget`, () => {
        const event = new MouseEvent(`click`);

        Object.defineProperty(event, `target`, {value: `<button>`});
        Object.defineProperty(event, `currentTarget`, {value: `<button>`});

        expect(isCurrentTarget(event)).toEqual(true);
    });
});
