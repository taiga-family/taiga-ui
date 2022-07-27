import {TestBed} from '@angular/core/testing';

import {TUI_DATE_FILLER, TUI_DATE_RANGE_FILLER} from '../date-fillers';
import {RANGE_SEPARATOR_CHAR} from '../date-time';

describe(`Date Fillers`, () => {
    it(`TUI_DATE_FILLER is a global token with default value`, () => {
        TestBed.configureTestingModule({});

        const result = TestBed.inject(TUI_DATE_FILLER);

        expect(result).toBe(`dd.mm.yyyy`);
    });

    it(`TUI_DATE_RANGE_FILLER is a global token with default value`, () => {
        TestBed.configureTestingModule({});

        const result = TestBed.inject(TUI_DATE_RANGE_FILLER);

        expect(result).toBe(`dd.mm.yyyy${RANGE_SEPARATOR_CHAR}dd.mm.yyyy`);
    });
});
