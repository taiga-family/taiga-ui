import {Directive, type DoCheck, inject, Output} from '@angular/core';
import {ControlContainer, NgControl} from '@angular/forms';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {distinctUntilChanged, skip, Subject, switchMap} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiValueChanges]',
})
export class TuiValueChanges<T> implements DoCheck {
    private readonly container = inject(ControlContainer, {optional: true});
    private readonly control = inject(NgControl, {optional: true});
    private readonly control$ = new Subject<ControlContainer | NgControl | null>();

    @Output() public readonly tuiValueChanges = this.control$.pipe(
        distinctUntilChanged(),
        switchMap(tuiControlValue<T>),
        distinctUntilChanged(),
        skip(1),
    );

    public ngDoCheck(): void {
        this.control$.next(this.control || this.container);
    }
}
