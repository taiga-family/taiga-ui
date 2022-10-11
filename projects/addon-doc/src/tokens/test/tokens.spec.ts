import {TestBed} from '@angular/core/testing';
import {TUI_DOC_DEFAULT_TABS} from '@taiga-ui/addon-doc';

describe(`Tokens`, () => {
    it(`TUI_DOC_DEFAULT_TABS`, () => {
        TestBed.configureTestingModule({});

        const result = TestBed.inject(TUI_DOC_DEFAULT_TABS);

        expect(result.length).toBe(0);
    });
});
