import {tuiGetElementObscures} from '@taiga-ui/cdk';

// TODO: JEST doesn't support elementFromPoint and elementsFromPoint
xdescribe(`getElementObscurers`, () => {
    it(`returns null if there is no defaultView`, () => {
        const element: Element = {ownerDocument: null} as unknown as Element;

        expect(tuiGetElementObscures(element)).toEqual(null);
    });

    it(`returns an edges array with obscurers`, () => {
        const element = document.createElement(`div`);

        const result = tuiGetElementObscures(element);

        expect(result ? result.length : null).toEqual(4);
    });
});
