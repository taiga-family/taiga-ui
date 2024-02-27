import {Directive, inject, Input, Output} from '@angular/core';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk/directives/active-zone';
import {tuiIfMap} from '@taiga-ui/cdk/observables';
import {TuiObscuredService} from '@taiga-ui/cdk/services';
import {map, Subject} from 'rxjs';

/**
 * Directive that monitors element visibility
 */
@Directive({
    standalone: true,
    selector: '[tuiObscured]',
    providers: [TuiObscuredService],
})
export class TuiObscuredDirective {
    private readonly activeZone = inject(TuiActiveZoneDirective, {optional: true});
    private readonly enabled$ = new Subject<boolean>();
    private readonly obscured$ = inject(TuiObscuredService, {self: true}).pipe(
        map(by => !!by?.every(el => !this.activeZone?.contains(el))),
    );

    @Input()
    public set tuiObscuredEnabled(enabled: boolean) {
        this.enabled$.next(enabled);
    }

    @Output()
    public readonly tuiObscured = this.enabled$.pipe(tuiIfMap(() => this.obscured$));
}
