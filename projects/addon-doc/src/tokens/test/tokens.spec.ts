import {TestBed} from '@angular/core/testing';

import {TUI_DOC_DEFAULT_TABS} from '../default-tabs';

describe(`Tokens`, () => {
    it(`TUI_DOC_DEFAULT_TABS`, () => {
        TestBed.configureTestingModule({});

        const result = TestBed.inject(TUI_DOC_DEFAULT_TABS);

        expect(result.length).toBe(0);
    });
});
