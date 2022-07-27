import {isNodeIn} from '../is-node-in';

describe(`isNodeIn`, () => {
    it(`tag selector`, () => {
        const div = document.createElement(`div`);

        document.body.appendChild(div);

        expect(isNodeIn(div, `div`)).toEqual(true);

        document.body.removeChild(div);
    });

    it(`class selector`, () => {
        const div = document.createElement(`div`);

        div.classList.add(`hello`);

        document.body.appendChild(div);

        expect(isNodeIn(div, `.hello`)).toEqual(true);

        document.body.removeChild(div);
    });

    it(`works with text nodes`, () => {
        const p = document.createElement(`p`);
        const textNode = document.createTextNode(`hello`);

        p.appendChild(textNode);

        document.body.appendChild(p);

        expect(isNodeIn(textNode, `p`)).toEqual(true);

        document.body.removeChild(p);
    });
});
