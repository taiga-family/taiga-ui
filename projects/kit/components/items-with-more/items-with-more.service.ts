import {ElementRef, Inject, Injectable, NgZone} from '@angular/core';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {tuiClamp, TuiResizeService, tuiZoneOptimized} from '@taiga-ui/cdk';
import {merge, Observable} from 'rxjs';
import {distinctUntilChanged, map, share, throttleTime} from 'rxjs/operators';

import {TuiItemsWithMoreDirective} from './items-with-more.directive';

@Injectable()
export class TuiItemsWithMoreService extends Observable<number> {
    readonly stream$ = merge(this.directive.change$, this.mutation$, this.resize$).pipe(
        throttleTime(0),
        map(() => this.getOverflowIndex()),
        distinctUntilChanged(),
        tuiZoneOptimized(this.ngZone),
        share(),
    );

    constructor(
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(MutationObserverService) private readonly mutation$: Observable<unknown>,
        @Inject(TuiResizeService) private readonly resize$: Observable<unknown>,
        @Inject(TuiItemsWithMoreDirective)
        private readonly directive: TuiItemsWithMoreDirective,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    private getOverflowIndex(): number {
        const {clientWidth, children} = this.elementRef.nativeElement;
        const items = Array.from(children, ({clientWidth}) => clientWidth);
        const first = this.directive.required === -1 ? 0 : this.directive.required;
        const last = items.length - 1;
        const more = children[last]?.tagName === `SPAN` ? items[last] : 0;

        items.unshift(...items.splice(first, 1));

        let total = items.reduce((sum, width) => sum + width, 0) - more;

        if (total <= clientWidth && this.directive.itemsLimit >= items.length) {
            return this.max;
        }

        for (let i = last - 1; i > 0; i--) {
            total -= items[i];

            if (total + more <= clientWidth) {
                return tuiClamp(
                    i > this.directive.required ? i - 1 : i - 2,
                    -1,
                    this.max,
                );
            }
        }

        return -1;
    }

    private get max(): number {
        return this.directive.itemsLimit > this.directive.required
            ? this.directive.itemsLimit - 1
            : this.directive.itemsLimit - 2;
    }
}
