import {tuiGetViewportHeight, tuiGetViewportWidth} from '@taiga-ui/core';
import {tuiTestingViewport} from '@taiga-ui/testing';

describe('viewport', () => {
    it('width/height', () => {
        tuiTestingViewport(770, 600);

        expect(window.document.documentElement.clientWidth).toBe(755);
        expect(window.innerWidth).toBe(770);

        expect(window.document.documentElement.clientHeight).toBe(600);
        expect(window.innerHeight).toBe(600);

        expect(tuiGetViewportWidth(window)).toBe(770);
        expect(tuiGetViewportHeight(window)).toBe(600);
    });
});
