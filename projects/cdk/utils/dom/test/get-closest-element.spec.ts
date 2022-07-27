import {getClosestElement} from '../get-closest-element';

describe(`getClosestElement`, () => {
    it(`works with closest`, () => {
        const element = document.createElement(`div`);
        const div = document.createElement(`div`);

        document.body.appendChild(element);
        document.body.appendChild(div);

        expect(getClosestElement(element, `div`)).toEqual(div);

        document.body.removeChild(element);
        document.body.removeChild(div);
    });

    it(`fallback works without closest and matches element`, () => {
        const savedCLosest = Element.prototype.closest;

        Element.prototype.closest = undefined as any;

        const element = document.createElement(`div`);
        const div = document.createElement(`div`);

        document.body.appendChild(element);
        document.body.appendChild(div);

        expect(getClosestElement(element, `div`)).toEqual(div);

        Element.prototype.closest = savedCLosest;
        document.body.removeChild(element);
        document.body.removeChild(div);
    });

    it(`fallback works without closest and with nested element`, () => {
        const savedCLosest = Element.prototype.closest;

        Element.prototype.closest = undefined as any;

        const div = document.createElement(`div`);

        document.body.appendChild(div);

        expect(getClosestElement(div, `img`)).toEqual(null);

        Element.prototype.closest = savedCLosest;
        document.body.removeChild(div);
    });
});
