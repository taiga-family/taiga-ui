import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef,
    HostBinding,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    identity,
    isNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {TuiTextMaskOptions} from '@taiga-ui/core';
import {EMPTY_MASK} from '@taiga-ui/kit/constants';
import {conformToMask} from 'angular2-text-mask';

@Component({
    selector: 'tui-input-inline',
    templateUrl: './input-inline.template.html',
    styleUrls: ['./input-inline.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputInlineComponent),
        },
    ],
})
export class TuiInputInlineComponent
    extends AbstractTuiControl<string | number>
    implements TuiFocusableElementAccessor {
    @Input()
    @tuiDefaultProp()
    maxLength: number | null = null;

    @Input()
    @tuiDefaultProp()
    textMaskOptions: TuiTextMaskOptions | null = null;

    @Input()
    @tuiDefaultProp()
    unmaskHandler: TuiStringHandler<string> = identity;

    @ViewChild('native')
    private readonly native?: ElementRef<HTMLInputElement>;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        super(control, changeDetectorRef);
    }

    get maxLengthMasked(): number | null {
        return this.textMaskOptions && this.textMaskOptions.placeholderChar
            ? null
            : this.maxLength;
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return !this.native ? null : this.native.nativeElement;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    get hasValue(): boolean {
        return this.value !== '';
    }

    get computedMask(): TuiTextMaskOptions {
        return this.textMaskOptions || EMPTY_MASK;
    }

    @HostBinding('attr.data-value')
    get maskedValue(): string {
        if (!this.textMaskOptions || this.value === '') {
            return String(this.value);
        }

        const {
            guide,
            placeholderChar,
            pipe,
            keepCharPositions,
            showMask,
            mask,
        } = this.textMaskOptions;
        const value = conformToMask(String(this.value), mask, {
            guide,
            placeholderChar,
            pipe,
            keepCharPositions,
            showMask,
        });

        return value.conformedValue;
    }

    onNativeModelChange(value: string) {
        this.updateValue(this.unmaskHandler(value));
    }

    onFocused(focused: boolean) {
        this.updateFocused(focused);
    }

    protected getFallbackValue(): string {
        return '';
    }
}
