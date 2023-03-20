import {Directive, Inject, Input, Optional, Output, Self} from '@angular/core';
import {tuiRequiredSetter} from '@taiga-ui/cdk/decorators';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk/directives/active-zone';
import {tuiIfMap} from '@taiga-ui/cdk/observables';
import {
    TuiDestroyService,
    TuiObscuredService,
    TuiParentsScrollService,
} from '@taiga-ui/cdk/services';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

/**
 * Directive that monitors element visibility
 */
@Directive({
    selector: '[tuiObscured]',
    providers: [TuiObscuredService, TuiParentsScrollService, TuiDestroyService],
})
export class TuiObscuredDirective {
    private readonly enabled$ = new Subject<boolean>();

    @Input()
    @tuiRequiredSetter()
    set tuiObscuredEnabled(enabled: boolean) {
        this.enabled$.next(enabled);
    }

    @Output()
    readonly tuiObscured: Observable<boolean>;

    constructor(
        @Optional()
        @Inject(TuiActiveZoneDirective)
        activeZone: TuiActiveZoneDirective | null,
        @Self()
        @Inject(TuiObscuredService)
        obscured$: TuiObscuredService,
    ) {
        const mapped$ = obscured$.pipe(
            map(
                obscuredBy =>
                    !!obscuredBy &&
                    (!activeZone ||
                        !obscuredBy.length ||
                        obscuredBy.every(element => !activeZone.contains(element))),
            ),
        );

        this.tuiObscured = this.enabled$.pipe(tuiIfMap(() => mapped$));
    }
}
