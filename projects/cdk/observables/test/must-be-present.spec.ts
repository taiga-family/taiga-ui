import {fakeAsync, tick} from '@angular/core/testing';
import {tuiMustBePresent} from '@taiga-ui/cdk/observables/must-be-present';
import {Subject} from 'rxjs';
import {first} from 'rxjs/operators';

describe(`tuiMustBePresent operator function`, () => {
    it(`not throws on NaN`, fakeAsync(() => {
        const stream = new Subject<number | null>();

        stream.pipe(first(), tuiMustBePresent()).subscribe();

        expect(() => {
            stream.next(NaN);
            tick();
        }).not.toThrow();
    }));

    it(`not throws on 0`, fakeAsync(() => {
        const stream = new Subject<number | null>();

        stream.pipe(first(), tuiMustBePresent()).subscribe();

        expect(() => {
            stream.next(0);
            tick();
        }).not.toThrow();
    }));

    it(`not throws on false`, fakeAsync(() => {
        const stream = new Subject<boolean | null>();

        stream.pipe(first(), tuiMustBePresent()).subscribe();

        expect(() => {
            stream.next(false);
            tick();
        }).not.toThrow();
    }));

    it(`not throws on empty string`, fakeAsync(() => {
        const stream = new Subject<string | null>();

        stream.pipe(first(), tuiMustBePresent()).subscribe();

        expect(() => {
            stream.next(``);
            tick();
        }).not.toThrow();
    }));

    it(`throws on undefined`, fakeAsync(() => {
        const stream = new Subject<null | undefined>();

        stream.pipe(first(), tuiMustBePresent()).subscribe();

        expect(() => {
            stream.next(undefined);
            tick();
        }).toThrow();
    }));

    it(`throws on null`, fakeAsync(() => {
        const stream = new Subject<null | undefined>();

        stream.pipe(first(), tuiMustBePresent()).subscribe();

        expect(() => {
            stream.next(null);
            tick();
        }).toThrow();
    }));
});
