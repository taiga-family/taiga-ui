import {DOCUMENT} from '@angular/common';
import {Directive, inject, NgZone, Output} from '@angular/core';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {
    tuiContainsOrAfter,
    tuiGetActualTarget,
    tuiInjectElement,
} from '@taiga-ui/cdk/utils';
import {filter, fromEvent, map, type Observable} from 'rxjs';

/**
 * @deprecated use {@link TuiActiveZone} instead
 */
@Directive({
    selector: '[tuiClickOutside]',
})
export class TuiClickOutside {
    private readonly zone = inject(NgZone);
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();

    @Output()
    public readonly tuiClickOutside: Observable<unknown> = fromEvent(
        this.doc,
        'mouseup',
    ).pipe(
        map(tuiGetActualTarget),
        filter((target) => this.isOutside(target)),
        tuiZoneOptimized(this.zone),
    );

    private isOutside(target: Node): boolean {
        return target === this.el || !tuiContainsOrAfter(this.el, target);
    }
}
