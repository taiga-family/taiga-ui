import {blurNativeFocused} from '../blur-native-focused';
import {setNativeFocused} from '../set-native-focused';

describe('blurNativeFocused', () => {
    let element: HTMLInputElement;

    beforeEach(() => {
        if (element) {
            document.body.removeChild(element);
        }

        element = document.createElement('input');
        document.body.appendChild(element);
        setNativeFocused(element, true);
    });

    it('Element is focused', () => {
        expect(document.activeElement).toBe(element);
    });

    it('Blurs element', () => {
        blurNativeFocused(document);

        expect(document.activeElement).toBe(document.body);
    });
});
