import {Directive, type DoCheck, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {ControlContainer, NgControl} from '@angular/forms';
import {distinctUntilChanged, EMPTY, type Observable, Subject, switchAll} from 'rxjs';

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
    );

    public readonly tuiValueChanges = outputFromObservable(this.tuiValueChanges$);

    public ngDoCheck(): void {
        this.refresh$.next(
            this.control?.valueChanges || this.container?.valueChanges || EMPTY,
        );
    }
}
