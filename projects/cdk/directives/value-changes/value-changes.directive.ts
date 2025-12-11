import {Directive, type DoCheck, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {ControlContainer, NgControl} from '@angular/forms';

import {distinctUntilChanged, skip, Subject, switchMap} from 'rxjs';
import {tuiControlValue} from '../../observables';

@Directive({
    selector: '[tuiValueChanges]',
})
export class TuiValueChanges<T> implements DoCheck {
    private readonly container = inject(ControlContainer, {optional: true});
    private readonly control = inject(NgControl, {optional: true});
    private readonly control$ = new Subject<ControlContainer | NgControl | null>();

    private readonly tuiValueChanges$ = this.control$.pipe(
        distinctUntilChanged(),
        switchMap(tuiControlValue),
        distinctUntilChanged(),
        skip(1),
    );

    public readonly tuiValueChanges = outputFromObservable(this.tuiValueChanges$);

    public ngDoCheck(): void {
        this.control$.next(this.control || this.container);
    }
}
