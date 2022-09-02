import {Attribute, Directive, ElementRef, Inject, NgZone} from '@angular/core';
import {tuiPreventDefault, tuiZonefree} from '@taiga-ui/cdk/observables';
import {TuiDestroyService} from '@taiga-ui/cdk/services';
import {fromEvent} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

/**
 * Simple prevent default on event directive when you do not need anything
 * else on event and do not want to trigger change detection
 */
@Directive({
    selector: `[tuiPreventDefault]`,
    providers: [TuiDestroyService],
})
export class TuiPreventDefaultDirective {
    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Attribute(`tuiPreventDefault`) eventName: string,
    ) {
        fromEvent(nativeElement, eventName, {passive: false})
            .pipe(tuiZonefree(ngZone), tuiPreventDefault(), takeUntil(destroy$))
            .subscribe();
    }
}
