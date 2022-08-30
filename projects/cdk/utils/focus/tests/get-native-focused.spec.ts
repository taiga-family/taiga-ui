import {tuiGetNativeFocused} from '@taiga-ui/cdk';

describe(`getNativeFocused`, () => {
    it(`returns active focused element in document`, () => {
        const buttonElement = document.createElement(`button`);

        document.body.appendChild(buttonElement);
        buttonElement.focus();

        expect(tuiGetNativeFocused(document)).toBe(buttonElement);

        document.body.removeChild(buttonElement);
    });

    it(`returns element from shadowRoot`, () => {
        const div = document.createElement(`div`);
        const buttonElement = document.createElement(`button`);

        document.body.appendChild(div);

        const root = div.attachShadow({mode: `open`});

        root.appendChild(buttonElement);
        buttonElement.focus();

        expect(tuiGetNativeFocused(document)).toBe(buttonElement);

        document.body.removeChild(div);
    });
});
