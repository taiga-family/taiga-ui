import {getClosestKeyboardFocusable} from '../get-closest-keyboard-focusable';

describe('getClosestKeyboardFocusable', () => {
    it('returns null if root has no document', () => {
        const root: any = {};
        const divElement = document.createElement('div');

        expect(getClosestKeyboardFocusable(divElement, true, root)).toBe(null);
    });

    it('returns closest focusable if there is backwords', () => {
        const root = document.createElement('div');
        const buttonElement = document.createElement('button');
        const divElement = document.createElement('div');

        root.appendChild(buttonElement);
        root.appendChild(divElement);
        document.body.appendChild(root);

        expect(getClosestKeyboardFocusable(divElement, true, root)).toBe(buttonElement);
    });

    it('returns closest focusable if there is towards', () => {
        const root = document.createElement('div');
        const buttonElement = document.createElement('button');
        const divElement = document.createElement('div');

        root.appendChild(divElement);
        root.appendChild(buttonElement);
        document.body.appendChild(root);

        expect(getClosestKeyboardFocusable(divElement, false, root)).toBe(buttonElement);
    });

    it('returns null if there is no focusable elements', () => {
        const root = document.createElement('div');
        const divElement = document.createElement('div');

        root.appendChild(divElement);
        document.body.appendChild(root);

        expect(getClosestKeyboardFocusable(divElement, undefined, root)).toBe(null);
    });
});
