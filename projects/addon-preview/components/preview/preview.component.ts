import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    Input,
    ViewChild,
} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {TUI_PREVIEW_TEXTS} from '@taiga-ui/addon-preview/tokens';
import {
    clamp,
    dragAndDropFrom,
    round,
    tuiDefaultProp,
    TuiDestroyService,
    TuiDragStage,
    TuiZoom,
} from '@taiga-ui/cdk';
import {tuiSlideInTop} from '@taiga-ui/core';
import {LanguagePreview} from '@taiga-ui/i18n';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {filter, map, pairwise, startWith, takeUntil} from 'rxjs/operators';

const INITIAL_SCALE_COEF = 0.8;
const EMPTY_COORDINATES: [number, number] = [0, 0];
const ROTATION_ANGLE = 90;

@Component({
    selector: 'tui-preview',
    templateUrl: './preview.template.html',
    styleUrls: ['./preview.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop],
    providers: [TuiDestroyService],
})
export class TuiPreviewComponent {
    @Input()
    @tuiDefaultProp()
    zoomable = true;

    @Input()
    @tuiDefaultProp()
    rotatable = false;

    minZoom = 1;

    width = 0;
    height = 0;

    readonly zoom$ = new BehaviorSubject<number>(this.minZoom);
    readonly rotation$ = new BehaviorSubject<number>(0);
    readonly coordinates$ = new BehaviorSubject<readonly [number, number]>(
        EMPTY_COORDINATES,
    );

    transitioned$ = dragAndDropFrom(this.elementRef.nativeElement).pipe(
        map(state => state.stage !== TuiDragStage.Continues),
    );

    readonly cursor$ = combineLatest(
        dragAndDropFrom(this.elementRef.nativeElement).pipe(startWith(null)),
        this.zoom$,
    ).pipe(
        map(([state, zoom]) => {
            if (!this.zoomable) {
                return null;
            }

            if (state && state.stage === TuiDragStage.Continues) {
                return 'grabbing';
            }

            return zoom > this.minZoom ? 'zoom-out' : 'zoom-in';
        }),
    );

    readonly wrapperTransform$ = combineLatest([
        this.coordinates$.pipe(map(([x, y]) => `${x}px, ${y}px`)),
        this.zoom$,
        this.rotation$,
    ]).pipe(
        map(([translate, zoom, rotation]) =>
            this.sanitizer.bypassSecurityTrustStyle(
                `translate(${translate}) scale(${zoom}) rotate(${rotation}deg)`,
            ),
        ),
    );

    @ViewChild('contentWrapper')
    set contentWrapper({nativeElement}: ElementRef<HTMLElement>) {
        this.initClickSubscription(nativeElement);
    }

    constructor(
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(ElementRef) readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiDestroyService) readonly destroy$: Observable<void>,
        @Inject(TUI_PREVIEW_TEXTS)
        readonly texts$: Observable<LanguagePreview['previewTexts']>,
    ) {}

    rotate() {
        this.rotation$.next(this.rotation$.value - ROTATION_ANGLE);
    }

    onPan(delta: [number, number]) {
        this.coordinates$.next(
            this.getGuardedCoordinates(
                this.coordinates$.value[0] + delta[0],
                this.coordinates$.value[1] + delta[1],
            ),
        );
    }

    onMutation(contentWrapper: HTMLElement) {
        const {clientWidth, clientHeight} = contentWrapper;

        this.refresh(clientWidth, clientHeight);
    }

    onZoom({clientX, clientY, delta}: TuiZoom) {
        if (this.zoomable) {
            this.processZoom(clientX, clientY, delta);
        }
    }

    onResize(contentResizeEntries: ReadonlyArray<ResizeObserverEntry>) {
        if (contentResizeEntries.length === 0) {
            return;
        }

        const {width, height} = contentResizeEntries[0].contentRect;

        this.refresh(width, height);
    }

    reset() {
        this.zoom$.next(this.minZoom);
        this.coordinates$.next(EMPTY_COORDINATES);
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

        return bigSize
            ? round(
                  Math.min(
                      (this.elementRef.nativeElement.clientHeight * INITIAL_SCALE_COEF) /
                          contentHeight,
                      (this.elementRef.nativeElement.clientWidth * INITIAL_SCALE_COEF) /
                          contentWidth,
                  ),
                  2,
              )
            : 1;
    }

    private initClickSubscription(element: HTMLElement) {
        dragAndDropFrom(element)
            .pipe(
                pairwise(),
                filter(
                    ([previous, current]) =>
                        previous !== null &&
                        current !== null &&
                        previous.stage === TuiDragStage.Start &&
                        current.stage === TuiDragStage.End,
                ),
                takeUntil(this.destroy$),
            )
            .subscribe(([{event}]) => {
                this.processZoom(
                    event.clientX,
                    event.clientY,
                    this.zoom$.value > this.minZoom ? -0.5 : 0.5,
                );
            });
    }

    private refresh(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.minZoom = this.calculateMinZoom(
            height,
            width,
            this.elementRef.nativeElement.clientHeight,
            this.elementRef.nativeElement.clientWidth,
        );
        this.zoom$.next(this.minZoom);
        this.rotation$.next(0);
    }

    private processZoom(clientX: number, clientY: number, delta: number) {
        const oldScale = this.zoom$.value;
        const newScale = clamp(this.zoom$.value + delta, this.minZoom, 2);

        const center = this.getScaleCenter(
            {clientX, clientY},
            this.coordinates$.value,
            this.zoom$.value,
        );

        this.zoom$.next(newScale);

        const moveX = center[0] * oldScale - center[0] * newScale;
        const moveY = center[1] * oldScale - center[1] * newScale;

        const coordinates = this.getGuardedCoordinates(
            this.coordinates$.value[0] + moveX,
            this.coordinates$.value[1] + moveY,
        );

        this.coordinates$.next(coordinates);
    }

    private getGuardedCoordinates(x: number, y: number): readonly [number, number] {
        const {offsetX, offsetY} = this.offsets;

        return [clamp(x, -offsetX, offsetX), clamp(y, -offsetY, offsetY)];
    }

    private getScaleCenter(
        {clientX, clientY}: {clientX: number; clientY: number},
        [x, y]: readonly [number, number],
        scale: number,
    ): [number, number] {
        return [
            (clientX - x - this.elementRef.nativeElement.offsetWidth / 2) / scale,
            (clientY - y - this.elementRef.nativeElement.offsetHeight / 2) / scale,
        ];
    }
}
