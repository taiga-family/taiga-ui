import {tuiBlurNativeFocused} from '@taiga-ui/cdk';

describe('blurNativeFocused', () => {
    let element: HTMLInputElement;

    beforeEach(() => {
        element = document.createElement('input');
        document.body.appendChild(element);
        element.focus();
    });

    afterAll(() => {
        document.body.removeChild(element);
    });

    it('element is focused', () => {
        expect(document.activeElement).toBe(element);
    });

    it('blurs element', () => {
        tuiBlurNativeFocused(document);

        expect(document.activeElement).toBe(document.body);
    });
});
