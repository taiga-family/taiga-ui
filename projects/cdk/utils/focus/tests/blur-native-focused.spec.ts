import {tuiBlurNativeFocused} from '@taiga-ui/cdk';

describe(`blurNativeFocused`, () => {
    let element: HTMLInputElement;

    beforeEach(() => {
        element = document.createElement(`input`);
        document.body.appendChild(element);
        element.focus();
    });

    afterAll(() => {
        document.body.removeChild(element);
    });

    it(`Element is focused`, () => {
        expect(document.activeElement).toBe(element);
    });

    it(`Blurs element`, () => {
        tuiBlurNativeFocused(document);

        expect(document.activeElement).toBe(document.body);
    });
});
