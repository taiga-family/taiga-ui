import {setNativeFocused} from '../set-native-focused';

describe('setNativeFocused', () => {
    let element: HTMLInputElement;
    let top: number;

    beforeEach(() => {
        if (element) {
            document.body.removeChild(element);
        }

        element = document.createElement('input');
        element.style.marginTop = '200vh';
        document.body.scrollTop = 0;
        document.body.appendChild(element);
        top = element.getBoundingClientRect().top;
    });

    it('Element is not focused', () => {
        expect(document.activeElement).not.toBe(element);
    });

    it('Focuses element', () => {
        setNativeFocused(element);

        expect(document.activeElement).toBe(element);
    });

    it('Unfocuses element', () => {
        setNativeFocused(element, true);
        setNativeFocused(element, false);

        expect(document.activeElement).not.toBe(element);
    });

    // TODO: Works in local chrome test runner, but not in headless serverside test runner
    xit('Page is scrolled to the focused element', () => {
        setNativeFocused(element, true);

        expect(top > element.getBoundingClientRect().top).toBe(true);
    });

    xit('Page is not scrolled to the focused element', () => {
        setNativeFocused(element, true, true);

        expect(top).toBe(element.getBoundingClientRect().top);
    });
});
