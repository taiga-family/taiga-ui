import {Directive, type DoCheck, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {ControlContainer, NgControl} from '@angular/forms';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {distinctUntilChanged, skip, Subject, switchMap} from 'rxjs';

@Directive({
    selector: '[tuiValueChanges]',
})
export class TuiValueChanges<T> implements DoCheck {
    private readonly container = inject(ControlContainer, {optional: true});
    private readonly control = inject(NgControl, {optional: true});
    private readonly control$ = new Subject<ControlContainer | NgControl | null>();

    private readonly tuiValueChanges$ = this.control$.pipe(
        distinctUntilChanged(),
        switchMap(tuiControlValue<T>),
        distinctUntilChanged(),
        skip(1),
    );

    public readonly tuiValueChanges = outputFromObservable(this.tuiValueChanges$);

    public ngDoCheck(): void {
        this.control$.next(this.control || this.container);
    }
}
