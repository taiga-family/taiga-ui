import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, inject, NgZone, Output} from '@angular/core';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiContainsOrAfter, tuiGetActualTarget} from '@taiga-ui/cdk/utils';
import {filter, fromEvent, map, Observable} from 'rxjs';

@Directive({
    selector: '[tuiClickOutside]',
})
export class TuiClickOutsideDirective {
    private readonly zone = inject(NgZone);
    private readonly doc = inject(DOCUMENT);
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    @Output()
    public readonly tuiClickOutside: Observable<unknown> = fromEvent(
        this.doc,
        'mouseup',
    ).pipe(
        map(tuiGetActualTarget),
        filter(target => this.isOutside(target)),
        tuiZoneOptimized(this.zone),
    );

    private isOutside(target: Node): boolean {
        return target === this.el || !tuiContainsOrAfter(this.el, target);
    }
}
