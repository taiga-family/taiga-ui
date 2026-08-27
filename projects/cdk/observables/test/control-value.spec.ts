import {Injector, signal, type WritableSignal} from '@angular/core';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {type AbstractControlDirective, FormControl} from '@angular/forms';
import {tuiControlValue} from '@taiga-ui/cdk';
import {skip} from 'rxjs';

describe('tuiControlValue', () => {
    it('takes control and starts with its value', fakeAsync(() => {
        let actual = '';
        const control = new FormControl('hello');

        tuiControlValue<string>(control).subscribe((value) => {
            actual = value;
        });

        expect(actual).toBe('hello');
    }));

    it('takes control and emits its values', fakeAsync(() => {
        let actual = '';
        const control = new FormControl('hello');

        tuiControlValue<string>(control)
            .pipe(skip(1))
            .subscribe((value) => {
                actual = value;
            });

        control.setValue('test');

        expect(actual).toBe('test');
    }));

    describe('control without valueChanges (InteropNgControl from signal forms)', () => {
        /**
         * `InteropNgControl` (from `@angular/forms/signals`)
         * has no observables, only getters over the field state signals
         */
        function fakeInteropNgControl(
            value: WritableSignal<string>,
        ): AbstractControlDirective {
            return {
                get value() {
                    return value();
                },
            } as unknown as AbstractControlDirective;
        }

        it('starts with the current value synchronously', () => {
            let actual = '';
            const value = signal('hello');

            tuiControlValue<string>(
                fakeInteropNgControl(value),
                TestBed.inject(Injector),
            ).subscribe((current) => {
                actual = current;
            });

            expect(actual).toBe('hello');
        });

        it('emits when the underlying signal changes', fakeAsync(() => {
            let actual = '';
            const value = signal('hello');

            tuiControlValue<string>(fakeInteropNgControl(value), TestBed.inject(Injector))
                .pipe(skip(1))
                .subscribe((current) => {
                    actual = current;
                });

            value.set('test');
            tick(); // `toObservable` watches the signal with an effect, which is asynchronous

            expect(actual).toBe('test');
        }));

        it('emits nothing without an injector', () => {
            let calls = 0;
            const value = signal('hello');

            tuiControlValue<string>(fakeInteropNgControl(value)).subscribe(() => {
                calls++;
            });

            expect(calls).toBe(0);
        });
    });
});
