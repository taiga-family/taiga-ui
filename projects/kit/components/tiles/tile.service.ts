import {isPlatformBrowser} from '@angular/common';
import type {OnDestroy} from '@angular/core';
import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiZonefreeScheduler} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiArrayShallowEquals, tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import type {Observable} from 'rxjs';
import {
    BehaviorSubject,
    combineLatest,
    debounceTime,
    distinctUntilChanged,
    map,
    startWith,
    Subscription,
} from 'rxjs';

import {TuiTilesComponent} from './tiles.component';

@Injectable()
export class TuiTileService implements OnDestroy {
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    private readonly el = tuiInjectElement();
    private readonly tiles = inject(TuiTilesComponent);
    private readonly sub = new Subscription();
    private readonly offset$ = new BehaviorSubject<readonly [number, number]>([NaN, NaN]);
    private readonly position$: Observable<readonly [number, number]> = combineLatest([
        this.offset$.pipe(distinctUntilChanged(tuiArrayShallowEquals)),
        inject(ResizeObserverService).pipe(startWith(null)),
        inject(MutationObserverService).pipe(startWith(null)),
        this.tiles.order$.pipe(debounceTime(0, tuiZonefreeScheduler())),
    ]).pipe(map(([offset]) => offset));

    public init(element: HTMLElement): void {
        if (this.isBrowser) {
            this.sub.add(
                this.position$.subscribe((offset) => {
                    this.setPosition(element, offset);
                    this.setRect(element, offset);
                }),
            );
        } else {
            this.el.style.setProperty('position', 'relative');
        }
    }

    public setOffset(offset: readonly [number, number]): void {
        this.offset$.next(offset);
    }

    public ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    private getRect([left, top]: readonly [number, number]): DOMRect {
        const elTop = Number.isNaN(top) ? this.el.offsetTop : top;
        const elLeft = Number.isNaN(left) ? this.el.offsetLeft : left;

        const rect = {
            top: elTop,
            left: elLeft,
            width: this.el.clientWidth,
            height: this.el.clientHeight,
            right: NaN,
            bottom: NaN,
            y: elTop,
            x: elLeft,
        };

        return {
            ...rect,
            toJSON: () => JSON.stringify(rect),
        };
    }

    private setRect({style}: HTMLElement, offset: readonly [number, number]): void {
        const {top, left, width, height} = this.getRect(offset);

        style.top = tuiPx(top);
        style.left = tuiPx(left);
        style.width = tuiPx(width);
        style.height = tuiPx(height);
    }

    private setPosition(element: HTMLElement, [left]: readonly [number, number]): void {
        if (!Number.isNaN(left)) {
            element.style.setProperty('position', 'fixed');
            element.style.setProperty('transition', 'none');

            return;
        }

        const {style} = element;
        const rect = element.getBoundingClientRect();
        const host = this.el.getBoundingClientRect();

        style.removeProperty('position');
        style.removeProperty('transition');
        style.removeProperty('top');
        style.removeProperty('left');

        style.top = tuiPx(rect.top - host.top + this.el.offsetTop);
        style.left = tuiPx(rect.left - host.left + this.el.offsetLeft);
    }
}
