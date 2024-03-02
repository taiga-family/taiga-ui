import {ElementRef, inject, Injectable, type OnDestroy} from '@angular/core';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiArrayShallowEquals, tuiPx} from '@taiga-ui/cdk';
import {
    BehaviorSubject,
    combineLatest,
    debounceTime,
    distinctUntilChanged,
    map,
    type Observable,
    startWith,
    Subscription,
} from 'rxjs';

import {TuiTilesComponent} from './tiles.component';

@Injectable()
export class TuiTileService implements OnDestroy {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly tiles = inject(TuiTilesComponent);
    private readonly sub = new Subscription();
    private readonly offset$ = new BehaviorSubject<readonly [number, number]>([NaN, NaN]);
    private readonly position$: Observable<readonly [number, number]> = combineLatest([
        this.offset$.pipe(distinctUntilChanged(tuiArrayShallowEquals)),
        inject(ResizeObserverService).pipe(startWith(null)),
        inject(MutationObserverService).pipe(startWith(null)),
        this.tiles.order$.pipe(debounceTime(0)),
    ]).pipe(map(([offset]) => offset));

    public init(element: HTMLElement): void {
        this.sub.add(
            this.position$.subscribe(offset => {
                this.setPosition(element, offset);
                this.setRect(element, offset);
            }),
        );
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

            return;
        }

        const {style} = element;
        const rect = element.getBoundingClientRect();
        const host = this.el.getBoundingClientRect();

        style.removeProperty('position');
        style.top = tuiPx(rect.top - host.top + this.el.offsetTop);
        style.left = tuiPx(rect.left - host.left + this.el.offsetLeft);
    }
}
