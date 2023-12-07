import {ElementRef, Inject, Injectable, OnDestroy} from '@angular/core';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {tuiArrayShallowEquals, tuiPx, TuiResizeService} from '@taiga-ui/cdk';
import {BehaviorSubject, combineLatest, Observable, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith} from 'rxjs/operators';

import {TuiTilesComponent} from './tiles.component';

@Injectable()
export class TuiTileService implements OnDestroy {
    private readonly sub = new Subscription();

    private readonly offset$ = new BehaviorSubject<readonly [number, number]>([NaN, NaN]);

    private readonly position$: Observable<readonly [number, number]> = combineLatest([
        this.offset$.pipe(distinctUntilChanged(tuiArrayShallowEquals)),
        this.resize$.pipe(startWith(null)),
        this.mutation$.pipe(startWith(null)),
        this.tiles.order$.pipe(debounceTime(0)),
    ]).pipe(map(([offset]) => offset));

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TuiTilesComponent) private readonly tiles: TuiTilesComponent,
        @Inject(TuiResizeService) private readonly resize$: Observable<unknown>,
        @Inject(MutationObserverService) private readonly mutation$: Observable<unknown>,
    ) {}

    init(element: HTMLElement): void {
        this.sub.add(
            this.position$.subscribe(offset => {
                this.setPosition(element, offset);
                this.setRect(element, offset);
            }),
        );
    }

    setOffset(offset: readonly [number, number]): void {
        this.offset$.next(offset);
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    private getRect([left, top]: readonly [number, number]): DOMRect {
        const elTop = Number.isNaN(top) ? this.el.nativeElement.offsetTop : top;
        const elLeft = Number.isNaN(left) ? this.el.nativeElement.offsetLeft : left;

        const rect = {
            top: elTop,
            left: elLeft,
            width: this.el.nativeElement.clientWidth,
            height: this.el.nativeElement.clientHeight,
            right: NaN,
            bottom: NaN,
            y: elTop,
            x: elLeft,
        };

        return {
            ...rect,
            toJSON: () => rect,
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
            element.style.setProperty(`position`, `fixed`);

            return;
        }

        const {style} = element;
        const rect = element.getBoundingClientRect();
        const host = this.el.nativeElement.getBoundingClientRect();

        style.removeProperty(`position`);
        style.top = tuiPx(rect.top - host.top + this.el.nativeElement.offsetTop);
        style.left = tuiPx(rect.left - host.left + this.el.nativeElement.offsetLeft);
    }
}
