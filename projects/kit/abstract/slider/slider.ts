import {
    ChangeDetectorRef,
    Directive,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    clamp,
    quantize,
    round,
    setNativeFocused,
    tuiDefaultProp,
    TuiEventWith,
    TuiNativeFocusableElement,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {TuiPluralize, TuiSizeS, TuiWithOptionalMinMax} from '@taiga-ui/core';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/kit/constants';
import {TUI_FROM_TO_TEXTS} from '@taiga-ui/kit/tokens';
import {TuiKeySteps} from '@taiga-ui/kit/types';
import {Observable, race, Subject} from 'rxjs';
import {map, switchMap, takeUntil} from 'rxjs/operators';

export const SLIDER_KEYBOARD_STEP = 0.05;
export const DOT_WIDTH: {[key: string]: number} = {
    s: 8,
    m: 16,
};

/**
 * @awful TODO: refactor
 * @internal
 * @dynamic
 */
@Directive()
export abstract class AbstractTuiSlider<T>
    extends AbstractTuiControl<T>
    implements TuiWithOptionalMinMax<number> {
    @Input()
    @tuiDefaultProp()
    min = 0;

    @Input()
    @tuiDefaultProp()
    max = Infinity;

    @Input()
    @tuiDefaultProp()
    segments = 0;

    @Input()
    @tuiDefaultProp()
    steps = 0;

    @Input()
    @tuiDefaultProp()
    pluralize: TuiPluralize | null = null;

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeS = 'm';

    @Input()
    @tuiDefaultProp()
    keySteps: TuiKeySteps | null = null;

    focusVisibleLeft = false;

    focusVisibleRight = false;

    @ViewChild('dotLeft')
    protected dotLeft?: ElementRef<TuiNativeFocusableElement>;

    @ViewChild('dotRight')
    protected dotRight?: ElementRef<TuiNativeFocusableElement>;

    // @bad TODO: handle pointer events instead of mouse and touch events
    private pointerDown$ = new Subject<
        TuiEventWith<MouseEvent | TouchEvent, HTMLElement>
    >();

    protected constructor(
        ngControl: NgControl | null,
        changeDetectorRef: ChangeDetectorRef,
        private readonly documentRef: Document,
        @Inject(TUI_FROM_TO_TEXTS)
        readonly fromToTexts$: Observable<[string, string]>,
    ) {
        super(ngControl, changeDetectorRef);
    }

    @HostBinding('class._segmented')
    get segmented(): boolean {
        return this.segments > 0;
    }

    get discrete(): boolean {
        return this.steps > 0;
    }

    get length(): number {
        return this.max - this.min;
    }

    get isLeftFocusable(): boolean {
        return !this.disabled && this.focusable && this.right !== 100;
    }

    get isRightFocusable(): boolean {
        return !this.disabled && this.focusable && this.left !== 100;
    }

    abstract get left(): number;

    abstract get right(): number;

    ngOnInit() {
        super.ngOnInit();

        const mouseMoves$ = typedFromEvent(this.documentRef, 'mousemove');
        const mouseUps$ = typedFromEvent(this.documentRef, 'mouseup');
        const touchMoves$ = typedFromEvent(this.documentRef, 'touchmove');
        const touchEnds$ = typedFromEvent(this.documentRef, 'touchend');
        let isPointerDownRight: boolean;

        this.pointerDown$
            .pipe(
                map((event: MouseEvent | TouchEvent) => {
                    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
                    const clientX =
                        event instanceof MouseEvent
                            ? event.clientX
                            : event.touches[0].clientX;
                    const fraction = clamp(
                        this.getFractionFromEvents(rect, clientX),
                        0,
                        1,
                    );
                    const deltaLeft = fraction * 100 - this.left;
                    const deltaRight = fraction * 100 - 100 + this.right;

                    isPointerDownRight =
                        Math.abs(deltaLeft) > Math.abs(deltaRight) ||
                        deltaRight > 0 ||
                        (this.left === 0 && this.right === 100);

                    const calibratedFraction = clamp(
                        this.getCalibratedFractionFromEvents(
                            rect,
                            clientX,
                            isPointerDownRight,
                        ),
                        0,
                        1,
                    );
                    const value = this.getValueFromFraction(
                        this.fractionGuard(calibratedFraction),
                    );

                    this.processValue(value, isPointerDownRight);
                    this.processFocus(isPointerDownRight);

                    return rect;
                }),
                switchMap(rect =>
                    race([touchMoves$, mouseMoves$]).pipe(
                        map((event: any) =>
                            this.getCalibratedFractionFromEvents(
                                rect,
                                event instanceof MouseEvent
                                    ? event.clientX
                                    : event.touches[0].clientX,
                                isPointerDownRight,
                            ),
                        ),
                        takeUntil(race([mouseUps$, touchEnds$])),
                    ),
                ),
                map(fraction => this.fractionGuard(fraction)),
            )
            .subscribe(fraction => {
                this.processValue(
                    this.getValueFromFraction(fraction),
                    isPointerDownRight,
                );
            });
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        this.pointerDown$.complete();
    }

    onMouseDown(event: TuiEventWith<MouseEvent, HTMLElement>) {
        if (this.disabled) {
            return;
        }

        event.preventDefault();
        this.pointerDown$.next(event);
    }

    onTouchStart(event: TuiEventWith<TouchEvent, HTMLElement>) {
        if (this.disabled) {
            return;
        }

        event.preventDefault();
        this.pointerDown$.next(event);
    }

    isPluralized(pluralize: TuiPluralize | null): pluralize is TuiPluralize {
        return pluralize !== null && pluralize.length === 3;
    }

    decrement(right: boolean) {
        this.processStep(false, right);
    }

    increment(right: boolean) {
        this.processStep(true, right);
    }

    getSegmentLabel(segment: number): number {
        return round(this.getValueFromFraction(segment / this.segments), 2);
    }

    getSegmentPrefix(segment: number, texts: [string, string]): string {
        if (this.segments !== 1) {
            return '';
        }

        if (segment === 0) {
            return `${texts[0]} `;
        }

        return `${texts[1]} `;
    }

    onActiveZone(active: boolean) {
        this.updateFocused(active);
    }

    onLeftFocusVisible(focusVisible: boolean) {
        this.focusVisibleLeft = focusVisible;
    }

    onRightFocusVisible(focusVisible: boolean) {
        this.focusVisibleRight = focusVisible;
    }

    protected abstract processValue(value: number, right?: boolean): void;

    protected abstract processStep(increment: boolean, right?: boolean): void;

    protected getFractionFromValue(value: number): number {
        const fraction = (value - this.min) / this.length;

        return this.keySteps !== null
            ? this.fractionValueKeyStepConverter(value, false)
            : clamp(Number.isFinite(fraction) ? fraction : 1, 0, 1);
    }

    protected getValueFromFraction(fraction: number): number {
        return this.keySteps !== null
            ? this.fractionValueKeyStepConverter(fraction, true)
            : round(
                  this.fractionGuard(fraction) * this.length + this.min,
                  TUI_FLOATING_PRECISION,
              );
    }

    protected getCalibratedFractionFromEvents(
        rect: ClientRect,
        clientX: number,
        _: boolean,
    ): number {
        return this.getFractionFromEvents(rect, clientX);
    }

    private processFocus(right: boolean) {
        if (!this.focusable || !this.dotRight || !this.dotLeft) {
            return;
        }

        if (right) {
            setNativeFocused(this.dotRight.nativeElement);
        } else {
            setNativeFocused(this.dotLeft.nativeElement);
        }
    }

    /**
     * Функция для перевода заполненности слайдера в значение и наоборот
     * с учётом шагов линейной зависимости.
     *
     * @param value переданное значение
     * @param isFraction перевод осуществляется с заполненности на значение
     */
    private fractionValueKeyStepConverter(value: number, isFraction: boolean): number {
        const steps = [[0, this.min]].concat(this.keySteps as TuiKeySteps, [
            [100, this.max],
        ]);

        let prevFraction = 0;
        let nextFraction = 100;
        let prevValue = this.min;
        let nextValue = this.max;

        for (let i = 1; i < steps.length; i++) {
            if (
                (isFraction && steps[i][0] / 100 > value) ||
                (!isFraction && steps[i][1] > value)
            ) {
                prevFraction = steps[i - 1][0] || 0;
                nextFraction = steps[i][0];
                prevValue = steps[i - 1][1];
                nextValue = steps[i][1];
                break;
            }
        }

        const deltaFraction = nextFraction - prevFraction;
        const deltaValue = nextValue - prevValue;

        return isFraction
            ? round(
                  ((value * 100 - prevFraction) / deltaFraction) * deltaValue + prevValue,
                  TUI_FLOATING_PRECISION,
              )
            : clamp(
                  ((value - prevValue) / deltaValue) * deltaFraction + prevFraction,
                  0,
                  100,
              ) / 100;
    }

    private fractionGuard(fraction: number): number {
        return this.discrete
            ? clamp(quantize(fraction, 1 / this.steps), 0, 1)
            : clamp(fraction, 0, 1);
    }

    private getFractionFromEvents(rect: ClientRect, clientX: number): number {
        const value = clientX - rect.left - DOT_WIDTH[this.size] / 2;
        const total = rect.width - DOT_WIDTH[this.size];

        return round(value / total, TUI_FLOATING_PRECISION);
    }
}
