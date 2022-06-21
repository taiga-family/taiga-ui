/// <reference types="karma-viewport" />
import {tuiGetViewportHeight, tuiGetViewportWidth} from '@taiga-ui/cdk';

describe('getViewport', () => {
    it('width', () => {
        expect(window.document.documentElement.clientWidth).toEqual(770);
        expect(window.innerWidth).toEqual(785);
        expect(tuiGetViewportWidth(window)).toEqual(785);

        viewport.set(500, 200);

        expect(window.document.documentElement.clientWidth).toEqual(485);
        expect(window.innerWidth).toEqual(500);
        expect(tuiGetViewportWidth(window)).toEqual(500);
    });

    it('height', () => {
        expect(window.document.documentElement.clientHeight).toEqual(600);
        expect(window.innerHeight).toEqual(600);
        expect(tuiGetViewportHeight(window)).toEqual(600);

        viewport.set(500, 200);

        expect(window.document.documentElement.clientHeight).toEqual(200);
        expect(window.innerHeight).toEqual(200);
        expect(tuiGetViewportHeight(window)).toEqual(200);
    });

    afterEach(() => viewport.reset());
});
