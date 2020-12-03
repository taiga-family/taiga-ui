import {TestBed} from '@angular/core/testing';
import {TUI_MONTHS} from '../months';

describe('Tokens', () => {
    it('months token factory returns array of months', () => {
        TestBed.configureTestingModule({});

        const months = TestBed.inject(TUI_MONTHS);

        expect(Array.isArray(months)).toBeTruthy();
    });
});
