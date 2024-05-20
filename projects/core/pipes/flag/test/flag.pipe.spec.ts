import {TestBed} from '@angular/core/testing';
import {TUI_SVG_DEFAULT_OPTIONS, TUI_SVG_OPTIONS, TuiFlagPipe} from '@taiga-ui/core';

describe('tuiFlagPipe', () => {
    let pipe: TuiFlagPipe;

    beforeEach(() => {
        TestBed.overrideProvider(TUI_SVG_OPTIONS, {
            useValue: {
                ...TUI_SVG_DEFAULT_OPTIONS,
                path: (_: string) => 'path/tuiIcon.svg#tuiIcon',
            },
        }).runInInjectionContext(() => {
            pipe = new TuiFlagPipe();
        });
    });

    it('resolves path from TUI_SVG_OPTIONS', () => {
        expect(pipe.transform('RU')).toContain('path/');
    });

    it('calculates flag path from TUI_SVG_OPTIONS & isoCode', () => {
        expect(pipe.transform('RU')).toBe('path/RU.png');
    });

    it('calculates flag path from isoCode', () => {
        expect(pipe.transform('AD')).toBe('path/AD.png');
    });
});
