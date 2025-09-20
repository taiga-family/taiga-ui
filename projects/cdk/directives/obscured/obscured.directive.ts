import {Directive, inject, Input, Output} from '@angular/core';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiIfMap} from '@taiga-ui/cdk/observables';
import {BehaviorSubject, map} from 'rxjs';

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
    private readonly enabled$ = new BehaviorSubject(false);
    private readonly obscured$ = inject(TuiObscuredService, {self: true}).pipe(
        // TODO: Refactor so that dropdowns and dialogs work properly without hacks
        map(
            (by) =>
                !!by?.every(
                    (el) => el.closest('tui-dialogs') || !this.activeZone?.contains(el),
                ),
        ),
    );

    @Output()
    public readonly tuiObscured = this.enabled$.pipe(tuiIfMap(() => this.obscured$));

    @Input()
    public set tuiObscuredEnabled(enabled: boolean) {
        this.enabled$.next(enabled);
    }
}
