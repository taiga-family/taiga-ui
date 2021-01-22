import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
    Inject,
    Optional,
    Self,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    isNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {AbstractTuiSlider, SLIDER_KEYBOARD_STEP} from '@taiga-ui/kit/abstract';
import {TUI_FROM_TO_TEXTS} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';

// @dynamic
@Component({
    selector: 'tui-slider',
    templateUrl: '../../abstract/slider/slider.common.template.html',
    styleUrls: ['../../abstract/slider/slider.common.style.less', './slider.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiSliderComponent),
        },
    ],
})
export class TuiSliderComponent
    extends AbstractTuiSlider<number>
    implements TuiFocusableElementAccessor {
    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(DOCUMENT) documentRef: Document,
        @Inject(TUI_FROM_TO_TEXTS) fromToTexts$: Observable<[string, string]>,
    ) {
        super(control, changeDetectorRef, documentRef, fromToTexts$);
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.dotRight ? this.dotRight.nativeElement : null;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    get left(): number {
        return 0;
    }

    get right(): number {
        return 100 - 100 * this.getFractionFromValue(this.value);
    }

    protected getFallbackValue(): number {
        return 0;
    }

    protected processStep(increment: boolean) {
        const fraction = this.getFractionFromValue(this.value);
        const step = this.discrete ? 1 / this.steps : SLIDER_KEYBOARD_STEP;
        const value = this.getValueFromFraction(
            increment ? fraction + step : fraction - step,
        );

        this.processValue(value);
    }

    protected processValue(value: number) {
        this.updateValue(value);
    }
}
