import {tuiGetCenteredScrollLeft} from '@taiga-ui/cdk';

describe('tuiGetCenteredScrollLeft', () => {
    it.each([
        {direction: 'LTR', current: 40, elementLeft: 360, expected: 238},
        {direction: 'RTL', current: -40, elementLeft: -120, expected: -322},
    ])('calculates the centered scroll position in $direction', ({current, elementLeft, expected}) => {
        const container = document.createElement('div');
        const element = document.createElement('div');

        Object.defineProperties(container, {
            scrollLeft: {value: current},
            clientLeft: {value: 2},
            clientWidth: {value: 200},
        });

        jest.spyOn(container, 'getBoundingClientRect').mockReturnValue({
            left: 100,
        } as DOMRect);
        jest.spyOn(element, 'getBoundingClientRect').mockReturnValue({
            left: elementLeft,
            width: 80,
        } as DOMRect);

        expect(tuiGetCenteredScrollLeft(container, element)).toBe(expected);
    });
});
