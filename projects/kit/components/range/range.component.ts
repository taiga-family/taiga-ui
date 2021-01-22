import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef,
    Inject,
    Optional,
    Self,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    isNativeFocusedIn,
    round,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {AbstractTuiSlider, DOT_WIDTH, SLIDER_KEYBOARD_STEP} from '@taiga-ui/kit/abstract';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/kit/constants';
import {TUI_FROM_TO_TEXTS} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';

// @dynamic
@Component({
    selector: 'tui-range',
    templateUrl: '../../abstract/slider/slider.common.template.html',
    styleUrls: ['../../abstract/slider/slider.common.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiRangeComponent),
        },
    ],
})
export class TuiRangeComponent
    extends AbstractTuiSlider<[number, number]>
    implements TuiFocusableElementAccessor {
    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(DOCUMENT) documentRef: Document,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TUI_FROM_TO_TEXTS) fromToTexts$: Observable<[string, string]>,
    ) {
        super(control, changeDetectorRef, documentRef, fromToTexts$);
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        if (this.computedDisabled || !this.dotLeft || !this.dotRight) {
            return null;
        }

        return this.isLeftFocusable
            ? this.dotLeft.nativeElement
            : this.dotRight.nativeElement;
    }

    get focused(): boolean {
        return isNativeFocusedIn(this.elementRef.nativeElement);
    }

    get left(): number {
        return 100 * this.getFractionFromValue(this.value[0]);
    }

    get right(): number {
        return 100 - 100 * this.getFractionFromValue(this.value[1]);
    }

    protected getFallbackValue(): [number, number] {
        return [0, 0];
    }

    protected processStep(increment: boolean, right: boolean) {
        const fraction = this.getFractionFromValue(right ? this.value[1] : this.value[0]);
        const step = this.discrete ? 1 / this.steps : SLIDER_KEYBOARD_STEP;
        const value = this.getValueFromFraction(
            increment ? fraction + step : fraction - step,
        );

        this.processValue(value, right);
    }

    protected processValue(value: number, right: boolean) {
        if (right === true) {
            this.updateEnd(value);
        } else {
            this.updateStart(value);
        }
    }

    protected getCalibratedFractionFromEvents(
        rect: ClientRect,
        clientX: number,
        isMouseDownRight: boolean,
    ): number {
        const value =
            clientX -
            rect.left -
            DOT_WIDTH[this.size] / 2 -
            (isMouseDownRight ? DOT_WIDTH[this.size] : 0);
        const total = rect.width - 2 * DOT_WIDTH[this.size];

        return round(value / total, TUI_FLOATING_PRECISION);
    }

    private updateStart(value: number) {
        this.updateValue([Math.min(value, this.value[1]), this.value[1]]);
    }

    private updateEnd(value: number) {
        this.updateValue([this.value[0], Math.max(value, this.value[0])]);
    }
}
