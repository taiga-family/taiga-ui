import {DOCUMENT} from '@angular/common';
import {Directive, inject, NgZone} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
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

    private readonly tuiClickOutside$: Observable<unknown> = fromEvent(
        this.doc,
        'mouseup',
    ).pipe(
        map(tuiGetActualTarget),
        filter((target) => this.isOutside(target)),
        tuiZoneOptimized(this.zone),
    );

    public readonly tuiClickOutside = outputFromObservable(this.tuiClickOutside$);

    private isOutside(target: Node): boolean {
        return target === this.el || !tuiContainsOrAfter(this.el, target);
    }
}
