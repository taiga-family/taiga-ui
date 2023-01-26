import {Directive, ElementRef, Inject, Input, NgZone, OnInit, Self} from '@angular/core';
import {tuiPreventDefault, tuiZonefree} from '@taiga-ui/cdk/observables';
import {TuiDestroyService} from '@taiga-ui/cdk/services';
import {fromEvent, Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

/**
 * @description:
 * Simple prevent default on event directive when you do not need anything
 * else on event and do not want to trigger change detection
 */
@Directive({
    selector: '[tuiPreventDefault]',
    providers: [TuiDestroyService],
})
export class TuiPreventDefaultDirective implements OnInit {
    @Input('tuiPreventDefault')
    eventName = '';

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: Observable<void>,
    ) {}

    ngOnInit(): void {
        fromEvent(this.elementRef.nativeElement, this.eventName, {passive: false})
            .pipe(tuiZonefree(this.ngZone), tuiPreventDefault(), takeUntil(this.destroy$))
            .subscribe();
    }
}
