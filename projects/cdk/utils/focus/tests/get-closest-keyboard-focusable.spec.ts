import {tuiGetClosestFocusable} from '../get-closest-keyboard-focusable';

describe(`getClosestKeyboardFocusable`, () => {
    it(`returns null if root has no document`, () => {
        const root: Node = {} as unknown as Node;
        const divElement = document.createElement(`div`);

        expect(tuiGetClosestFocusable(divElement, root)).toBe(null);
    });

    it(`returns closest focusable going backwards`, () => {
        const root = document.createElement(`div`);
        const buttonElement = document.createElement(`button`);
        const divElement = document.createElement(`div`);

        root.appendChild(buttonElement);
        root.appendChild(divElement);
        document.body.appendChild(root);

        expect(tuiGetClosestFocusable(divElement, root, true)).toBe(buttonElement);

        document.body.removeChild(root);
    });

    it(`returns closest focusable going forwards`, () => {
        const root = document.createElement(`div`);
        const buttonElement = document.createElement(`button`);
        const divElement = document.createElement(`div`);

        root.appendChild(divElement);
        root.appendChild(buttonElement);
        document.body.appendChild(root);

        expect(tuiGetClosestFocusable(divElement, root)).toBe(buttonElement);

        document.body.removeChild(root);
    });

    it(`returns null if there is no focusable elements`, () => {
        const root = document.createElement(`div`);
        const divElement = document.createElement(`div`);

        root.appendChild(divElement);
        document.body.appendChild(root);

        expect(tuiGetClosestFocusable(divElement, root)).toBe(null);

        document.body.removeChild(root);
    });
});
