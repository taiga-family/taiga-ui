import {Directive, inject, Input, Output} from '@angular/core';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiIfMap} from '@taiga-ui/cdk/observables';
import {map, Subject} from 'rxjs';

import {TuiObscuredService} from './obscured.service';

/**
 * Directive that monitors element visibility
 */
@Directive({
    standalone: true,
    selector: '[tuiObscured]',
    providers: [TuiObscuredService],
})
export class TuiObscured {
    private readonly activeZone = inject(TuiActiveZone, {optional: true});
    private readonly enabled$ = new Subject<boolean>();
    private readonly obscured$ = inject(TuiObscuredService, {self: true}).pipe(
        map((by) => !!by?.every((el) => !this.activeZone?.contains(el))),
    );

    @Output()
    public readonly tuiObscured = this.enabled$.pipe(tuiIfMap(() => this.obscured$));

    @Input()
    public set tuiObscuredEnabled(enabled: boolean) {
        this.enabled$.next(enabled);
    }
}
