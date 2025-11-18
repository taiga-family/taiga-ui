import {Directive, inject, input} from '@angular/core';
import {outputFromObservable, toObservable} from '@angular/core/rxjs-interop';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiIfMap} from '@taiga-ui/cdk/observables';
import {map} from 'rxjs';

import {TuiObscuredService} from './obscured.service';

/**
 * Directive that monitors element visibility
 */
@Directive({
    selector: '[tuiObscured]',
    providers: [TuiObscuredService],
})
export class TuiObscured {
    private readonly activeZone = inject(TuiActiveZone, {optional: true});
    private readonly obscured$ = inject(TuiObscuredService, {self: true}).pipe(
        map((by) => !!by?.every((el) => !this.activeZone?.contains(el))),
    );

    public readonly tuiObscuredEnabled = input<boolean>();

    public readonly tuiObscured$ = toObservable(this.tuiObscuredEnabled).pipe(
        tuiIfMap(() => this.obscured$),
    );

    public readonly tuiObscured = outputFromObservable(this.tuiObscured$);
}
