import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {MutationObserverModule} from '@ng-web-apis/mutation-observer';
import {ResizeObserverModule} from '@ng-web-apis/resize-observer';
import {TUI_PREVIEW_ICONS, TUI_PREVIEW_TEXTS} from '@taiga-ui/addon-preview/tokens';
import type {TuiZoom} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    tuiClamp,
    tuiDragAndDropFrom,
    tuiInjectElement,
    TuiPanDirective,
    tuiPx,
    tuiRound,
    tuiTypedFromEvent,
    TuiZoomDirective,
} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiHint, tuiSlideInTop} from '@taiga-ui/core';
import {BehaviorSubject, combineLatest, map, merge, startWith} from 'rxjs';

import {TuiPreviewActionDirective} from './preview-action/preview-action.directive';
import {TuiPreviewZoomComponent} from './zoom/preview-zoom.component';

const INITIAL_SCALE_COEF = 0.8;
const EMPTY_COORDINATES: [number, number] = [0, 0];
const ROTATION_ANGLE = 90;

@Component({
    standalone: true,
    selector: 'tui-preview',
    imports: [
        NgIf,
        TuiPanDirective,
        MutationObserverModule,
        ResizeObserverModule,
        TuiZoomDirective,
        AsyncPipe,
        TuiHint,
        TuiButtonDirective,
        TuiPreviewActionDirective,
        TuiPreviewZoomComponent,
    ],
    templateUrl: './preview.template.html',
    styleUrls: ['./preview.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop],
})
export class TuiPreviewComponent {
    private readonly el = tuiInjectElement();

    @Input()
    public zoomable = true;

    @Input()
    public rotatable = false;

    protected minZoom = 1;

    protected width = 0;
    protected height = 0;

    protected readonly texts$ = inject(TUI_PREVIEW_TEXTS);
    protected readonly icons = inject(TUI_PREVIEW_ICONS);

    protected readonly zoom$ = new BehaviorSubject<number>(this.minZoom);
    protected readonly rotation$ = new BehaviorSubject<number>(0);
    protected readonly coordinates$ = new BehaviorSubject<readonly [number, number]>(
        EMPTY_COORDINATES,
    );

    protected readonly transitioned$ = merge(
        tuiDragAndDropFrom(this.el).pipe(map(({stage}) => stage !== 'continues')),
        tuiTypedFromEvent(this.el, 'touchmove', {
            passive: true,
        }).pipe(map(TUI_FALSE_HANDLER)),
        tuiTypedFromEvent(this.el, 'wheel', {passive: true}).pipe(map(TUI_FALSE_HANDLER)),
    );

    protected readonly cursor$ = tuiDragAndDropFrom(this.el).pipe(
        map(({stage}) => (stage === 'continues' ? 'grabbing' : 'initial')),
        startWith('initial'),
    );

    protected readonly wrapperTransform$ = combineLatest([
        this.coordinates$.pipe(map(([x, y]) => `${tuiPx(x)}, ${tuiPx(y)}`)),
        this.zoom$,
        this.rotation$,
    ]).pipe(
        map(
            ([translate, zoom, rotation]) =>
                `translate(${translate}) scale(${zoom}) rotate(${rotation}deg)`,
        ),
    );

    protected rotate(): void {
        this.rotation$.next(this.rotation$.value - ROTATION_ANGLE);
    }

    protected onPan(delta: readonly [number, number]): void {
        this.coordinates$.next(
            this.getGuardedCoordinates(
                this.coordinates$.value[0] + delta[0],
                this.coordinates$.value[1] + delta[1],
            ),
        );
    }

    protected onMutation(contentWrapper: HTMLElement): void {
        const {clientWidth, clientHeight} = contentWrapper;

        this.refresh(clientWidth, clientHeight);
    }

    protected onZoom({clientX, clientY, delta}: TuiZoom): void {
        if (this.zoomable) {
            this.processZoom(clientX, clientY, delta);
        }
    }

    protected onResize(contentResizeEntries: readonly ResizeObserverEntry[]): void {
        if (contentResizeEntries.length === 0) {
            return;
        }

        const {width, height} = contentResizeEntries[0].contentRect;

        this.refresh(width, height);
    }

    protected reset(): void {
        this.zoom$.next(this.minZoom);
        this.coordinates$.next(EMPTY_COORDINATES);
    }

    protected setZoom(zoom: number): void {
        this.zoom$.next(zoom);
        const [x, y] = this.coordinates$.value;

        this.coordinates$.next(this.getGuardedCoordinates(x, y));
    }

    private get offsets(): {offsetX: number; offsetY: number} {
        const offsetX = ((this.zoom$.value - this.minZoom) * this.width) / 2;
        const offsetY = ((this.zoom$.value - this.minZoom) * this.height) / 2;

        return {offsetX, offsetY};
    }

    private calculateMinZoom(
        contentHeight: number,
        contentWidth: number,
        boxHeight: number,
        boxWidth: number,
    ): number {
        const bigSize =
            contentHeight > boxHeight * INITIAL_SCALE_COEF ||
            contentWidth > boxWidth * INITIAL_SCALE_COEF;
        const {clientHeight, clientWidth} = this.el;

        return bigSize
            ? tuiRound(
                  Math.min(
                      (clientHeight * INITIAL_SCALE_COEF) / contentHeight,
                      (clientWidth * INITIAL_SCALE_COEF) / contentWidth,
                  ),
                  2,
              )
            : 1;
    }

    private refresh(width: number, height: number): void {
        this.width = width;
        this.height = height;
        this.minZoom = this.calculateMinZoom(
            height,
            width,
            this.el.clientHeight,
            this.el.clientWidth,
        );
        this.zoom$.next(this.minZoom);
        this.coordinates$.next(EMPTY_COORDINATES);
        this.rotation$.next(0);
    }

    private processZoom(clientX: number, clientY: number, delta: number): void {
        const oldScale = this.zoom$.value;
        const newScale = tuiClamp(oldScale + delta, this.minZoom, 2);

        const center = this.getScaleCenter(
            {clientX, clientY},
            this.coordinates$.value,
            this.zoom$.value,
        );

        const moveX = center[0] * oldScale - center[0] * newScale;
        const moveY = center[1] * oldScale - center[1] * newScale;

        this.zoom$.next(newScale);
        this.coordinates$.next(
            this.getGuardedCoordinates(
                this.coordinates$.value[0] + moveX,
                this.coordinates$.value[1] + moveY,
            ),
        );
    }

    private getGuardedCoordinates(x: number, y: number): readonly [number, number] {
        const {offsetX, offsetY} = this.offsets;

        return [tuiClamp(x, -offsetX, offsetX), tuiClamp(y, -offsetY, offsetY)];
    }

    private getScaleCenter(
        {clientX, clientY}: {clientX: number; clientY: number},
        [x, y]: readonly [number, number],
        scale: number,
    ): [number, number] {
        return [
            (clientX - x - this.el.offsetWidth / 2) / scale,
            (clientY - y - this.el.offsetHeight / 2) / scale,
        ];
    }
}
