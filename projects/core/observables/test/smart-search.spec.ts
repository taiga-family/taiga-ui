import {from, Observable, of} from 'rxjs';
import {skip, take} from 'rxjs/operators';

import {smartSearch} from '../smart-search';

describe('smartSearch', () => {
    let source: Observable<string>;

    beforeEach(() => {
        source = from(['search']);
    });

    it('starts with empty array', done => {
        const operator = smartSearch<string>((search: string) => of([`${search}result`]));

        operator(source)
            .pipe(take(1))
            .subscribe(result => {
                expect(result).toEqual([]);
                done();
            });
    });

    it('returns null starting search', done => {
        const operator = smartSearch<string>((search: string) => of([`${search}result`]));

        operator(source)
            .pipe(skip(1), take(1))
            .subscribe(result => {
                expect(result).toBeNull();
                done();
            });
    });

    it('returns search result of function', done => {
        const operator = smartSearch<string>((search: string) => of([`${search}result`]));

        operator(source)
            .pipe(skip(2), take(1))
            .subscribe(result => {
                expect(result).toEqual(['searchresult']);
                done();
            });
    });

    it('does not emit new value if it starts with previous', done => {
        let counter = 0;

        const operator = smartSearch<string>((search: string) => {
            counter++;

            return of([`${search}result`]);
        });

        source = from(['search', 'searchhh']);

        operator(source).subscribe({
            complete: () => {
                expect(counter).toBe(1);
                done();
            },
        });
    });
});
