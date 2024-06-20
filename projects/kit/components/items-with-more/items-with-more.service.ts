import {inject, Injectable, NgZone} from '@angular/core';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {distinctUntilChanged, map, merge, Observable, share, throttleTime} from 'rxjs';

import {TuiItemsWithMoreDirective} from './items-with-more.directive';

@Injectable()
export class TuiItemsWithMoreService extends Observable<number> {
    private readonly el = tuiInjectElement();
    private readonly directive = inject(TuiItemsWithMoreDirective);

    protected readonly stream$ = merge(
        this.directive.change$,
        inject(MutationObserverService),
        inject(ResizeObserverService),
    ).pipe(
        throttleTime(0),
        map(() => this.getOverflowIndex()),
        distinctUntilChanged(),
        tuiZoneOptimized(inject(NgZone)),
        share(),
    );

    constructor() {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    private get maxItems(): number {
        return this.directive.itemsLimit > this.directive.required
            ? this.directive.itemsLimit - 1
            : this.directive.itemsLimit - 2;
    }

    private getOverflowIndex(): number {
        const {clientWidth, children} = this.el;
        const items = Array.from(children, ({clientWidth}) => clientWidth);
        const first = this.directive.required === -1 ? 0 : this.directive.required;
        const last = items.length - 1;
        const more = children[last]?.tagName === 'SPAN' ? items[last] : 0;

        items.unshift(...items.splice(first, 1));

        let total = items.reduce((sum, width) => sum + width, 0) - more;

        if (total <= clientWidth && this.directive.itemsLimit >= items.length) {
            return this.maxItems;
        }

        for (let i = last - 1; i > 0; i--) {
            total -= items[i];

            if (total + more <= clientWidth) {
                return tuiClamp(
                    i > this.directive.required ? i - 1 : i - 2,
                    -1,
                    this.maxItems,
                );
            }
        }

        return -1;
    }
}
