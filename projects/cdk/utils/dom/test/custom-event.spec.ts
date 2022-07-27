import {tuiCustomEvent} from '../custom-event';

describe(`custom event`, () => {
    it(`is created`, () => {
        const event = tuiCustomEvent(
            `hello`,
            {
                bubbles: true,
                cancelable: true,
                detail: true,
            },
            document,
        );

        expect(event.type).toEqual(`hello`);
    });

    it(`IE fallback`, () => {
        const savedCE = CustomEvent;

        // eslint-disable-next-line no-global-assign
        CustomEvent = undefined as any;

        const event = tuiCustomEvent(
            `hello`,
            {
                bubbles: true,
                cancelable: true,
                detail: true,
            },
            document,
        );

        expect(event.type).toEqual(`hello`);

        // eslint-disable-next-line no-global-assign
        CustomEvent = savedCE;
    });
});
