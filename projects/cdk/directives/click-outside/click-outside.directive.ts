import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, Inject, NgZone, Output} from '@angular/core';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiContainsOrAfter, tuiGetActualTarget} from '@taiga-ui/cdk/utils';
import {fromEvent, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Directive({
    selector: '[tuiClickOutside]',
})
export class TuiClickOutsideDirective {
    @Output()
    readonly tuiClickOutside: Observable<unknown> = fromEvent(this.doc, 'mouseup').pipe(
        map(tuiGetActualTarget),
        filter(target => this.isOutside(target)),
        tuiZoneOptimized(this.zone),
    );

    constructor(
        @Inject(NgZone) private readonly zone: NgZone,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    ) {}

    private isOutside(target: Node): boolean {
        return (
            target === this.el.nativeElement ||
            !tuiContainsOrAfter(this.el.nativeElement, target)
        );
    }
}
