import {getElementObscurers} from '../get-element-obscurers';

describe(`getElementObscurers`, () => {
    it(`returns null if there is no defaultView`, () => {
        const element: Element = {ownerDocument: null} as unknown as Element;

        expect(getElementObscurers(element)).toEqual(null);
    });

    it(`returns an edges array with obscurers`, () => {
        const element = document.createElement(`div`);

        const result = getElementObscurers(element);

        expect(result ? result.length : null).toEqual(4);
    });
});
