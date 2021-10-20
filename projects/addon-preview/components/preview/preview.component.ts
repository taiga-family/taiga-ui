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
    TuiDragState,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {tuiSlideInTop} from '@taiga-ui/core';
import {LanguagePreview} from '@taiga-ui/i18n';
import {BehaviorSubject, combineLatest, merge, Observable, Subject} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    mapTo,
    pairwise,
    repeat,
    startWith,
    switchMap,
    takeUntil,
} from 'rxjs/operators';

const INITIAL_SCALE_COEF = 0.8;
const EMPTY_COORDINATES: [number, number] = [0, 0];

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
    hypot = 0;

    readonly drag$ = new Subject<TuiDragState | null>();
    readonly zoom$ = new BehaviorSubject<number>(this.minZoom);
    readonly rotation$ = new BehaviorSubject<number>(0);
    readonly coordinates$ = new BehaviorSubject<readonly [number, number]>(
        EMPTY_COORDINATES,
    );

    readonly transitioned$ = merge(
        this.drag$.pipe(
            filter(drag => drag === null),
            switchMap(() =>
                merge(
                    this.zoom$.pipe(filter(zoom => zoom !== this.minZoom)),
                    this.rotation$.pipe(filter(rotation => rotation !== 0)),
                ).pipe(mapTo(true), startWith(false)),
            ),
        ),
        this.drag$.pipe(
            filter(drag => drag !== null),
            map(drag => !drag || drag.stage !== TuiDragStage.Continues),
        ),
        typedFromEvent(this.elementRef.nativeElement, 'touchmove', {passive: true}).pipe(
            mapTo(false),
        ),
    );

    readonly cursor$ = combineLatest(this.drag$.pipe(startWith(null)), this.zoom$).pipe(
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

    // TODO: use named tuples after TS update
    readonly wrapperTranslate$ = combineLatest([
        this.drag$.pipe(startWith(null), pairwise()),
        this.rotation$,
    ]).pipe(
        map<
            [[TuiDragState | null, TuiDragState | null], number],
            readonly [number, number]
        >(state => {
            const [pair, rotation] = state;
            let coordinates = this.coordinates$.value;

            if (
                pair[1] === null ||
                pair[0] === null ||
                pair[1].stage === TuiDragStage.Start
            ) {
                return coordinates;
            }

            if (
                pair[0].stage === TuiDragStage.Start &&
                pair[1].stage === TuiDragStage.End
            ) {
                coordinates = this.recalculateCoordinatesAfterZoom(
                    coordinates,
                    pair[1].event.clientX,
                    pair[1].event.clientY,
                    rotation,
                );
            }

            const moveX = pair[1].event.clientX - pair[0].event.clientX;
            const moveY = pair[1].event.clientY - pair[0].event.clientY;

            return this.getGuarderCoordinates(
                coordinates[0] + moveX,
                coordinates[1] + moveY,
            );
        }),
        distinctUntilChanged(),
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
        this.initDragSubscribtion(nativeElement);

        this.initTouchScaleSubscribtion(nativeElement);
    }

    constructor(
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(ElementRef) readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiDestroyService) readonly destroy$: Observable<void>,
        @Inject(TUI_PREVIEW_TEXTS)
        readonly texts$: Observable<LanguagePreview['previewTexts']>,
    ) {
        this.initClickSubscription();
        this.initWrapperTranslateSubscription();
    }

    close() {}

    rotate() {
        this.rotation$.next(this.rotation$.value - 90);
    }

    onMutation(contentWrapper: HTMLElement) {
        const {clientWidth, clientHeight} = contentWrapper;

        this.refresh(clientWidth, clientHeight);
    }

    onWheel(event: WheelEvent) {
        if (!this.zoomable) {
            return;
        }

        this.processZoom(event, event.deltaY);
    }

    processZoom(event: {clientX: number; clientY: number}, delta: number) {
        const oldScale = this.zoom$.value;
        const newScale = clamp(this.zoom$.value - delta * 0.01, this.minZoom, 2);

        const center = this.getScaleCenter(
            event,
            this.coordinates$.value,
            this.zoom$.value,
        );

        const moveX = center[0] * oldScale - center[0] * newScale;
        const moveY = center[1] * oldScale - center[1] * newScale;

        this.zoom$.next(newScale);

        const coordinates = this.getGuarderCoordinates(
            this.coordinates$.value[0] + moveX,
            this.coordinates$.value[1] + moveY,
        );

        this.coordinates$.next(coordinates);
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

    private getGuarderCoordinates(x: number, y: number): readonly [number, number] {
        const {offsetX, offsetY} = this.offsets;

        return [clamp(x, -offsetX, offsetX), clamp(y, -offsetY, offsetY)];
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

    private recalculateCoordinatesAfterZoom(
        previous: readonly [number, number],
        nextX: number,
        nextY: number,
        rotation: number,
    ): readonly [number, number] {
        const vertical = rotation % 180 === 0;
        const third =
            (vertical
                ? this.elementRef.nativeElement.clientHeight
                : this.elementRef.nativeElement.clientWidth) / 3;
        const next = vertical ? nextY : nextX;

        if (next < third) {
            return [vertical ? 0 : this.width / 3, vertical ? this.height / 3 : 0];
        }

        const lastThird =
            (vertical
                ? this.elementRef.nativeElement.clientHeight
                : this.elementRef.nativeElement.clientWidth) - third;

        if (next > lastThird) {
            return [vertical ? 0 : -this.width / 3, vertical ? -this.height / 3 : 0];
        }

        return previous;
    }

    private initClickSubscription() {
        this.drag$
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
            .subscribe(() => {
                this.zoom$.next(
                    this.zoom$.value > this.minZoom
                        ? this.minZoom
                        : this.zoom$.value + 0.5,
                );
            });
    }

    private initDragSubscribtion(nativeElement: HTMLElement) {
        merge(
            dragAndDropFrom(nativeElement),
            typedFromEvent(nativeElement, 'touchstart', {passive: true}).pipe(
                switchMap(() =>
                    typedFromEvent(nativeElement, 'touchmove', {passive: true}),
                ),
                filter(event => event.touches.length < 2),
                takeUntil(typedFromEvent(nativeElement, 'touchend')),
                repeat(),
                map(event => {
                    /**
                     * TODO: find the better way. DragFrom does not support touches and
                     * they are incompatible with MouseEvent, but we may use it
                     * while we need only ClientX/Y
                     */

                    return new TuiDragState(
                        TuiDragStage.Continues,
                        event.touches[0] as any,
                    );
                }),
            ),
            typedFromEvent(nativeElement, 'touchstart', {passive: true}).pipe(
                filter(event => event.touches.length < 2),
                map(
                    event =>
                        new TuiDragState(TuiDragStage.Start, event.touches[0] as any),
                ),
            ),
        )
            .pipe(
                filter(() => this.zoomable),
                takeUntil(this.destroy$),
            )
            .subscribe(event => {
                this.drag$.next(event);
            });
    }

    private initTouchScaleSubscribtion(nativeElement: HTMLElement) {
        typedFromEvent(nativeElement, 'touchstart', {passive: true})
            .pipe(
                filter(event => event.touches.length > 1),
                map(event => this.calculateMultitouchHypot(event)),
                switchMap(hypot => {
                    this.hypot = hypot;

                    return typedFromEvent(nativeElement, 'touchmove', {passive: true});
                }),
                takeUntil(typedFromEvent(nativeElement, 'touchend')),
                repeat(),
                map(event => {
                    const clientX =
                        (event.touches[0].clientX + event.touches[1].clientX) / 2;
                    const clientY =
                        (event.touches[0].clientY + event.touches[1].clientY) / 2;
                    const hypot = this.calculateMultitouchHypot(event);
                    const delta = this.hypot - hypot;

                    this.hypot = hypot;

                    this.processZoom({clientX, clientY}, delta);
                }),
            )
            .subscribe();
    }

    private initWrapperTranslateSubscription() {
        this.wrapperTranslate$
            .pipe(takeUntil(this.destroy$))
            .subscribe(coords => this.coordinates$.next(coords));
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
        this.drag$.next(null);
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

    private calculateMultitouchHypot({touches}: TouchEvent): number {
        return Math.hypot(
            touches[0].clientX - touches[1].clientX,
            touches[0].clientY - touches[1].clientY,
        );
    }
}
