import {tuiIsNodeIn} from '@taiga-ui/cdk';

describe(`tuiIsNodeIn`, () => {
    it(`tag selector`, () => {
        const div = document.createElement(`div`);

        document.body.appendChild(div);

        expect(tuiIsNodeIn(div, `div`)).toEqual(true);

        document.body.removeChild(div);
    });

    it(`class selector`, () => {
        const div = document.createElement(`div`);

        div.classList.add(`hello`);

        document.body.appendChild(div);

        expect(tuiIsNodeIn(div, `.hello`)).toEqual(true);

        document.body.removeChild(div);
    });

    it(`works with text nodes`, () => {
        const p = document.createElement(`p`);
        const textNode = document.createTextNode(`hello`);

        p.appendChild(textNode);

        document.body.appendChild(p);

        expect(tuiIsNodeIn(textNode, `p`)).toEqual(true);

        document.body.removeChild(p);
    });
});
