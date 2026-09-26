import {DOCUMENT} from '@angular/common';
import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {tuiIfMap} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    bufferCount,
    filter,
    fromEvent,
    map,
    merge,
    pairwise,
    startWith,
    take,
    takeWhile,
} from 'rxjs';

import {TuiSheetDialogComponent} from './sheet-dialog.component';

@Directive({selector: '[tuiSheetDialogClose]'})
export class TuiSheetDialogClose {
    private readonly el = tuiInjectElement();
    private readonly doc = inject(DOCUMENT);
    private readonly sheet = inject(TuiSheetDialogComponent);
    private readonly scroll$ = fromEvent(this.el, 'scroll');
    private readonly untouched$ = merge(
        fromEvent(this.doc, 'touchstart', {passive: true}).pipe(map(() => false)),
        fromEvent(this.doc, 'touchend', {passive: true}).pipe(map(() => true)),
        fromEvent(this.doc, 'touchcancel', {passive: true}).pipe(map(() => true)),
    );

    private readonly swipe$ = this.scroll$.pipe(
        map(() => this.el.scrollHeight - this.el.clientHeight - this.el.scrollTop),
        // Excluding scroll due to content height changes when scrolled to the end
        filter((scroll) => Math.abs(scroll) > 10),
        map(() => this.el.scrollTop),
        pairwise(),
        map(([prev, curr]) => prev - curr),
        takeWhile((value) => value > 0),
        bufferCount(5),
        take(1),
    );

    private readonly release$ = this.scroll$.pipe(
        startWith(null),
        filter(() => !this.el.scrollTop),
        take(1),
    );

    public readonly tuiSheetDialogClose = outputFromObservable(
        merge(
            // Swipe down
            this.untouched$.pipe(
                tuiIfMap(
                    () => this.swipe$,
                    (untouched) => untouched && this.el.scrollTop < this.sheet.initial,
                ),
            ),
            // Wheel/let go at the end
            merge(
                this.untouched$,
                fromEvent(this.el, 'wheel').pipe(map(() => true)),
            ).pipe(tuiIfMap(() => this.release$)),
        ),
    );
}
