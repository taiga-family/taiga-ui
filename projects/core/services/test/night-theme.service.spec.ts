import {TestBed} from '@angular/core/testing';
import {WINDOW} from '@ng-web-apis/common';
import {configureTestSuite} from 'ng-bullet';
import {take} from 'rxjs/operators';
import {TuiNightThemeService} from '../night-theme.service';

describe('TuiNightThemeService', () => {
    const mock: any = document.createElement('div');
    let service!: TuiNightThemeService;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: WINDOW,
                    useValue: {
                        matchMedia(): any {
                            return mock;
                        },
                    },
                },
            ],
        });
    });

    beforeEach(() => {
        service = TestBed.inject(TuiNightThemeService);
        mock.matches = true;
    });

    it('returns actual value', () => {
        let value = false;

        service.pipe(take(1)).subscribe(v => {
            value = v;
        });

        expect(value).toBe(true);
    });

    it('fires upon refresh', () => {
        let value = false;

        service.pipe(take(2)).subscribe(v => {
            value = v;
        });

        mock.matches = false;
        mock.dispatchEvent(new Event('change'));

        expect(value).toBe(false);
    });
});
