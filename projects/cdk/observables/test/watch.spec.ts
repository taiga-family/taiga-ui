import {fakeAsync, tick} from '@angular/core/testing';
import {Subject} from 'rxjs';

import {watch} from '../watch';

describe('Watch operator function', () => {
    let $: Subject<any>;
    let called = 0;

    const chrStub: any = {
        markForCheck: () => called++,
    };

    beforeEach(() => {
        $ = new Subject<any>();
        called = 0;
    });

    it('initially emits nothing, after event emits "true" and after a tick emits "false"', fakeAsync(() => {
        $.pipe(watch(chrStub)).subscribe();

        $.next();
        tick();

        expect(called).toBe(1);
    }));
});
