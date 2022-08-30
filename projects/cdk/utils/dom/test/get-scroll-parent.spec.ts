import {tuiGetScrollParent} from '@taiga-ui/cdk';

describe(`tuiGetScrollParent`, () => {
    it(`There is no element`, () => {
        expect(tuiGetScrollParent(null)).toEqual(null);
    });

    it(`Should return element. Vertical is true`, () => {
        const element = document.createElement(`div`);

        Object.defineProperty(element, `scrollHeight`, {value: 5});
        Object.defineProperty(element, `clientHeight`, {value: 0});

        expect(tuiGetScrollParent(element)).toEqual(element);
    });

    it(`Should return element. Vertical is false`, () => {
        const element = document.createElement(`div`);

        Object.defineProperty(element, `scrollWidth`, {value: 5});
        Object.defineProperty(element, `clientWidth`, {value: 0});

        expect(tuiGetScrollParent(element, false)).toEqual(element);
    });

    it(`Shoul return parent element`, () => {
        const parentElement = document.createElement(`div`);
        const childElement = document.createElement(`div`);

        parentElement.appendChild(childElement);

        Object.defineProperty(childElement, `scrollWidth`, {value: 0});
        Object.defineProperty(childElement, `clientWidth`, {value: 5});

        Object.defineProperty(parentElement, `scrollWidth`, {value: 5});
        Object.defineProperty(parentElement, `clientWidth`, {value: 0});

        expect(tuiGetScrollParent(childElement, false)).toEqual(parentElement);
    });
});
