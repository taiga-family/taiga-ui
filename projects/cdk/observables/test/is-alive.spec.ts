import {fakeAsync, tick} from '@angular/core/testing';
import {tuiIsAlive} from '@taiga-ui/cdk';
import {Subject} from 'rxjs';

describe(`Observable.prototype.tuiIsAlive`, () => {
    let $: Subject<unknown>;
    let result: boolean[];

    beforeEach(() => {
        $ = new Subject<unknown>();
        result = [];
    });

    it(`initially emits nothing, after event emits "true" and after a tick emits "false"`, fakeAsync(() => {
        $.pipe(tuiIsAlive()).subscribe(alive => {
            result.push(alive);
        });

        expect<boolean | null>(result).toEqual([]);

        $.next(999);

        expect<boolean | null>(result).toEqual([true]);

        tick();

        expect<boolean | null>(result).toEqual([true, false]);
    }));

    it(`if during a lifespan another event comes, "true" is not emitted again`, fakeAsync(() => {
        $.pipe(tuiIsAlive(300)).subscribe(alive => {
            result.push(alive);
        });

        $.next(111);
        tick(200);
        $.next(222);
        tick(300);

        expect<boolean | null>(result).toEqual([true, false]);
    }));
});
