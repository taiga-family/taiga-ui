import {inject, Injectable} from '@angular/core';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiZonefreeScheduler, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {debounceTime, distinctUntilChanged, map, merge, Observable, share} from 'rxjs';

import {TuiItemsWithMoreDirective} from './items-with-more.directive';

@Injectable()
export class TuiItemsWithMoreService extends Observable<number> {
    private readonly el = tuiInjectElement();
    private readonly directive = inject(TuiItemsWithMoreDirective);

    protected readonly stream$ = merge(
        this.directive.change$,
        inject(MutationObserverService, {self: true}),
        inject(ResizeObserverService, {self: true}),
    ).pipe(
        debounceTime(0, tuiZonefreeScheduler()),
        map(() =>
            this.directive.linesLimit > 1
                ? this.getOverflowIndexMultiline()
                : this.getOverflowIndex(Array.from(this.el.children)),
        ),
        distinctUntilChanged(),
        tuiZoneOptimized(),
        share(),
    );

    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
    }

    private getOverflowIndex(children: Element[]): number {
        const {computedSide, itemsLimit} = this.directive;
        const {clientWidth} = this.el;
        const items = Array.from(children, ({clientWidth}) => clientWidth);
        const index = computedSide === 'start' ? 0 : items.length - 1;
        const more = children[index]?.tagName === 'SPAN' ? (items[index] ?? 0) : 0;
        const total = items.reduce((sum, width) => sum + width, 0) - more;

        if (total <= clientWidth && itemsLimit >= items.length) {
            return computedSide === 'end' ? itemsLimit : 0;
        }

        return computedSide === 'start'
            ? this.getIndexStart(items, total, more)
            : this.getIndexEnd(items, total, more);
    }

    private getIndexStart(items: number[], total: number, more: number): number {
        const {required, itemsLimit} = this.directive;
        const {clientWidth} = this.el;
        const min = Number.isFinite(itemsLimit) ? items.length - itemsLimit - 1 : 0;
        const last = items.length - 1;
        const mandatory = required === -1 ? last : required;

        for (let i = 1; i < last; i++) {
            if (i === mandatory + 1) {
                continue;
            }

            total -= items[i] ?? 0;

            if (total + more <= clientWidth) {
                return tuiClamp(i, mandatory < min ? min + 1 : min, items.length);
            }
        }

        return items.length;
    }

    private getIndexEnd(items: number[], total: number, more: number): number {
        const {required, itemsLimit} = this.directive;
        const {clientWidth} = this.el;
        const max = itemsLimit > required ? itemsLimit - 1 : itemsLimit - 2;
        const last = items.length - 1;
        const mandatory = required === -1 ? 0 : required;

        for (let i = last - 1; i > 0; i--) {
            if (i === mandatory) {
                continue;
            }

            total -= items[i] ?? 0;

            if (total + more <= clientWidth) {
                return tuiClamp(i - 1, -1, max);
            }
        }

        return -1;
    }

    private getOverflowIndexMultiline(): number {
        const {children} = this.el;
        const {linesLimit, itemsLimit} = this.directive;
        const items = Array.from(children) as HTMLElement[];
        const rows = new Set(items.map((item) => item.offsetTop));
        const offset = Array.from(rows)[linesLimit - 1];
        const firstItemLastRow = items.findIndex((i) => i.offsetTop === offset);
        const lastRow = items.slice(firstItemLastRow);
        const index = firstItemLastRow + this.getOverflowIndex(lastRow);

        return Math.min(itemsLimit - 1, index);
    }
}
