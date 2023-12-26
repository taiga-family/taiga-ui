import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, Inject, Output} from '@angular/core';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiContainsOrAfter, tuiGetActualTarget} from '@taiga-ui/cdk/utils';
import {filter, fromEvent, map, Observable} from 'rxjs';

@Directive({
    selector: '[tuiClickOutside]',
})
export class TuiClickOutsideDirective {
    @Output()
    readonly tuiClickOutside: Observable<unknown> = fromEvent(this.doc, 'mouseup').pipe(
        map(tuiGetActualTarget),
        filter(target => this.isOutside(target)),
        tuiZoneOptimized(),
    );

    constructor(
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
