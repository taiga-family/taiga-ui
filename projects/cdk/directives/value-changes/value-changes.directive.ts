import {Directive, type DoCheck, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {ControlContainer, NgControl} from '@angular/forms';

import {
    distinctUntilChanged,
    EMPTY,
    type Observable,
    skip,
    Subject,
    switchAll,
} from 'rxjs';
import {tuiControlValue} from '../../observables';

@Directive({
    selector: '[tuiValueChanges]',
})
export class TuiValueChanges<T> implements DoCheck {
    private readonly container = inject(ControlContainer, {optional: true});
    private readonly control = inject(NgControl, {optional: true});
    private readonly refresh$ = new Subject<Observable<T>>();

    private readonly tuiValueChanges$ = this.refresh$.pipe(
        distinctUntilChanged(),
        switchAll(),
        distinctUntilChanged(),
        skip(1),
    );

    public readonly tuiValueChanges = outputFromObservable(this.tuiValueChanges$);

    public ngDoCheck(): void {
        const control = this.control || this.container;

        this.refresh$.next(control ? tuiControlValue<T>(control) : EMPTY);
    }
}
