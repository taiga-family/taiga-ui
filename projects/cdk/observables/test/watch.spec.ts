import {type ChangeDetectorRef} from '@angular/core';
import {fakeAsync, tick} from '@angular/core/testing';
import {tuiWatch} from '@taiga-ui/cdk';
import {Subject} from 'rxjs';

describe('tuiWatch operator function', () => {
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
        $.pipe(tuiWatch(chrStub)).subscribe();

        $.next(undefined);
        tick();

        expect(called).toBe(1);
    }));
});
