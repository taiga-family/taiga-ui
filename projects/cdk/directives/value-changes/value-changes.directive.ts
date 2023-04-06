import {Directive, DoCheck, Inject, Optional, Output} from '@angular/core';
import {ControlContainer, NgControl} from '@angular/forms';
import {EMPTY, Observable, Subject} from 'rxjs';
import {distinctUntilChanged, switchAll} from 'rxjs/operators';

@Directive({
    selector: '[tuiValueChanges]',
})
export class TuiValueChangesDirective<T> implements DoCheck {
    private readonly refresh$ = new Subject<Observable<T>>();

    @Output()
    readonly tuiValueChanges = this.refresh$.pipe(distinctUntilChanged(), switchAll());

    constructor(
        @Optional()
        @Inject(ControlContainer)
        private readonly container: ControlContainer | null,
        @Optional()
        @Inject(NgControl)
        private readonly control: NgControl | null,
    ) {}

    ngDoCheck(): void {
        this.refresh$.next(
            this.control?.valueChanges || this.container?.valueChanges || EMPTY,
        );
    }
}
