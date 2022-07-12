import {tuiMoveFocus} from '../move-focus';

describe('move focus', () => {
    it('   ', () => {
        const first = document.createElement('button');
        const second = document.createElement('textarea');

        document.body.appendChild(first);
        document.body.appendChild(second);

        const arr = [first, second];

        tuiMoveFocus(0, arr, 1);

        expect(document.activeElement).toEqual(second);

        document.body.removeChild(first);
        document.body.removeChild(second);
    });
});
