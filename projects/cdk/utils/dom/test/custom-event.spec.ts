import {tuiCustomEvent} from '../custom-event';

describe('custom event', () => {
    it('is created', () => {
        const event = tuiCustomEvent(
            'hello',
            {
                bubbles: true,
                cancelable: true,
                detail: true,
            },
            document,
        );

        expect(event.type).toEqual('hello');
    });

    it('IE fallback', () => {
        const savedCE = CustomEvent;

        CustomEvent = undefined as any;

        const event = tuiCustomEvent(
            'hello',
            {
                bubbles: true,
                cancelable: true,
                detail: true,
            },
            document,
        );

        expect(event.type).toEqual('hello');

        CustomEvent = savedCE;
    });
});
