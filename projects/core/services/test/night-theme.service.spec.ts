import {TestBed} from '@angular/core/testing';
import {WINDOW} from '@ng-web-apis/common';
import {configureTestSuite} from '@taiga-ui/testing';
import {take} from 'rxjs/operators';

import {TuiNightThemeService} from '../night-theme.service';

describe(`TuiNightThemeService`, () => {
    const mock: HTMLDivElement = document.createElement(`div`);
    let service!: TuiNightThemeService;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: WINDOW,
                    useValue: {
                        matchMedia(): unknown {
                            return mock;
                        },
                    },
                },
            ],
        });
    });

    beforeEach(() => {
        service = TestBed.inject(TuiNightThemeService);
        mock.matches = true as any;
    });

    it(`returns actual value`, () => {
        let value = false;

        service.pipe(take(1)).subscribe(v => {
            value = v;
        });

        expect(value).toBe(true);
    });

    it(`fires upon refresh`, () => {
        let value = false;

        service.pipe(take(2)).subscribe(v => {
            value = v;
        });

        mock.matches = false as any;
        mock.dispatchEvent(new Event(`change`));

        expect(value).toBe(false);
    });
});
