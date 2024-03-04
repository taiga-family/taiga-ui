import {Directive, type DoCheck, inject, Output} from '@angular/core';
import {ControlContainer, NgControl} from '@angular/forms';
import {distinctUntilChanged, EMPTY, type Observable, Subject, switchAll} from 'rxjs';

@Directive({
    selector: '[tuiValueChanges]',
})
export class TuiValueChangesDirective<T> implements DoCheck {
    private readonly container = inject(ControlContainer, {optional: true});
    private readonly control = inject(NgControl, {optional: true});
    private readonly refresh$ = new Subject<Observable<T>>();

    @Output()
    public readonly tuiValueChanges = this.refresh$.pipe(
        distinctUntilChanged(),
        switchAll(),
        distinctUntilChanged(),
    );

    public ngDoCheck(): void {
        this.refresh$.next(
            this.control?.valueChanges || this.container?.valueChanges || EMPTY,
        );
    }
}
