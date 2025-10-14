import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    Input,
} from '@angular/core';
import {WaMutationObserver} from '@ng-web-apis/mutation-observer';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiPan} from '@taiga-ui/cdk/directives/pan';
import {TuiZoom, type TuiZoomEvent} from '@taiga-ui/cdk/directives/zoom';
import {tuiDragAndDropFrom, tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp, tuiRound} from '@taiga-ui/cdk/utils/math';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiHint} from '@taiga-ui/core/directives/hint';
import {TUI_PREVIEW_ICONS, TUI_PREVIEW_TEXTS} from '@taiga-ui/kit/tokens';
import {BehaviorSubject, combineLatest, map, merge, startWith} from 'rxjs';

import {TuiPreviewAction} from './action/preview-action.directive';
import {TuiPreviewZoom} from './zoom/preview-zoom.component';

const EMPTY_COORDINATES: [number, number] = [0, 0];
const ROTATION_ANGLE = 90;

@Component({
    selector: 'tui-preview',
    imports: [
        AsyncPipe,
        TuiButton,
        TuiHint,
        TuiPan,
        TuiPreviewAction,
        TuiPreviewZoom,
        TuiZoom,
        WaMutationObserver,
        WaResizeObserver,
    ],
    templateUrl: './preview.template.html',
    styleUrl: './preview.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPreviewComponent {
    private readonly el = tuiInjectElement();

    protected minZoom = 1;
    protected width = 0;
    protected height = 0;
    protected readonly texts$ = inject(TUI_PREVIEW_TEXTS);
    protected readonly icons = inject(TUI_PREVIEW_ICONS);
    protected readonly cdr = inject(ChangeDetectorRef);
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

    @Input()
    public zoomable = true;

    @Input()
    public rotatable = false;

    @Input()
    public initialScale = 0.8;

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

    protected onZoom({clientX, clientY, delta}: TuiZoomEvent): void {
        if (this.zoomable) {
            this.processZoom(clientX, clientY, delta);
        }
    }

    protected onResize([entry]: readonly ResizeObserverEntry[]): void {
        if (entry?.contentRect) {
            this.refresh(entry.contentRect.width, entry.contentRect.height);
            this.cdr.detectChanges();
        }
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
            contentHeight > boxHeight * this.initialScale ||
            contentWidth > boxWidth * this.initialScale;
        const {clientHeight, clientWidth} = this.el;

        return bigSize
            ? tuiRound(
                  Math.min(
                      (clientHeight * this.initialScale) / contentHeight,
                      (clientWidth * this.initialScale) / contentWidth,
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
