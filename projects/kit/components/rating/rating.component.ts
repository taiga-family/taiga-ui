import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostListener,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';

import {TUI_RATING_OPTIONS, TuiRatingOptions} from './rating-options';

@Component({
    selector: `tui-rating`,
    templateUrl: `./rating.template.html`,
    styleUrls: [`./rating.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiRatingComponent),
        tuiAsControl(TuiRatingComponent),
    ],
})
export class TuiRatingComponent
    extends AbstractTuiControl<number>
    implements TuiFocusableElementAccessor
{
    @ViewChild(`focusableElement`)
    private readonly focusableElement?: ElementRef<HTMLInputElement>;

    @Input()
    @tuiDefaultProp()
    min = this.options.min;

    @Input()
    @tuiDefaultProp()
    max = this.options.max;

    @Input()
    @tuiDefaultProp()
    iconNormal = this.options.iconNormal;

    @Input()
    @tuiDefaultProp()
    iconFilled = this.options.iconFilled;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        ngControl: NgControl | null,
        @Inject(ChangeDetectorRef)
        changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_RATING_OPTIONS)
        private readonly options: TuiRatingOptions,
    ) {
        super(ngControl, changeDetectorRef);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.computedDisabled || !this.focusableElement
            ? null
            : this.focusableElement.nativeElement;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    get isFocusable(): boolean {
        return !(this.readOnly || this.disabled);
    }

    get percent(): number {
        return (100 * this.value) / this.max;
    }

    @HostListener(`focusin`, [`true`])
    @HostListener(`focusout`, [`false`])
    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    setRateByReverseIndex(index: number): void {
        this.updateValue(this.max - index);
    }

    setRate(value: number): void {
        this.updateValue(value);
    }

    protected getFallbackValue(): number {
        return 0;
    }
}
