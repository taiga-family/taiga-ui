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
import {NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    identity,
    isNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {TUI_VALUE_ACCESSOR} from '@taiga-ui/core';

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
        {
            provide: TUI_VALUE_ACCESSOR,
            deps: [[new Optional(), NG_VALUE_ACCESSOR]],
            useFactory: identity,
        },
    ],
})
export class TuiInputInlineComponent
    extends AbstractTuiControl<string | number>
    implements TuiFocusableElementAccessor {
    @Input()
    @tuiDefaultProp()
    maxLength: number | null = null;

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

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return !this.native ? null : this.native.nativeElement;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    get hasValue(): boolean {
        return this.value !== '';
    }

    @HostBinding('attr.data-value')
    get maskedValue(): string {
        return this.native && this.value
            ? this.native.nativeElement.value
            : String(this.value);
    }

    onValueChange(value: string) {
        this.updateValue(value);
    }

    onFocused(focused: boolean) {
        this.updateFocused(focused);
    }

    protected getFallbackValue(): string {
        return '';
    }
}
