import {ChangeDetectorRef} from '@angular/core';
import {fakeAsync, tick} from '@angular/core/testing';
import {Subject} from 'rxjs';

import {watch} from '../watch';

describe('Watch operator function', () => {
    let $: Subject<unknown>;
    let called = 0;

    const chrStub: ChangeDetectorRef = {
        markForCheck: () => called++,
    } as unknown as ChangeDetectorRef;

    beforeEach(() => {
        $ = new Subject<unknown>();
        called = 0;
    });

    it('initially emits nothing, after event emits "true" and after a tick emits "false"', fakeAsync(() => {
        $.pipe(watch(chrStub)).subscribe();

        $.next();
        tick();

        expect(called).toBe(1);
    }));
});
