import {TestBed} from '@angular/core/testing';
import {TUI_ASSETS_PATH, TuiFlagPipe} from '@taiga-ui/core';

describe('tuiFlagPipe', () => {
    let pipe: TuiFlagPipe;

    beforeEach(() => {
        TestBed.overrideProvider(TUI_ASSETS_PATH, {
            useValue: 'path',
        }).runInInjectionContext(() => {
            pipe = new TuiFlagPipe();
        });
    });

    it('resolves path from TUI_ASSETS_PATH', () => {
        expect(pipe.transform('RU')).toContain('path/');
    });

    it('calculates flag path from TUI_SVG_OPTIONS & isoCode', () => {
        expect(pipe.transform('RU')).toBe('path/icons/flags/RU.svg');
    });

    it('calculates flag path from isoCode', () => {
        expect(pipe.transform('AD')).toBe('path/icons/flags/AD.svg');
    });
});
