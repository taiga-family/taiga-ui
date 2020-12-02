import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    forwardRef,
    Inject,
    Input,
    Optional,
    Self,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    identity,
    isNativeFocused,
    setNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {
    TUI_DATA_LIST_HOST,
    TuiDataListDirective,
    TuiDataListHost,
    TuiHorizontalDirection,
    TuiHostedDropdownComponent,
    TuiPrimitiveTextfieldComponent,
    TuiTextMaskOptions,
    TuiWithTextMask,
} from '@taiga-ui/core';
import {EMPTY_MASK} from '@taiga-ui/kit/constants';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {conformToMask} from 'angular2-text-mask';

@Component({
    selector: 'tui-input',
    templateUrl: './input.template.html',
    styleUrls: ['./input.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputComponent),
        },
        FIXED_DROPDOWN_CONTROLLER_PROVIDER,
        {
            provide: TUI_DATA_LIST_HOST,
            useExisting: forwardRef(() => TuiInputComponent),
        },
    ],
})
export class TuiInputComponent
    extends AbstractTuiControl<string>
    implements TuiWithTextMask, TuiFocusableElementAccessor, TuiDataListHost<string> {
    @Input()
    @tuiDefaultProp()
    icon: string | null = null;

    @Input()
    @tuiDefaultProp()
    iconAlign: TuiHorizontalDirection = 'left';

    @Input()
    @tuiDefaultProp()
    textMaskOptions: TuiTextMaskOptions | null = null;

    @Input()
    @tuiDefaultProp()
    unmaskHandler: TuiStringHandler<string> = identity;

    open = false;

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    readonly datalist: PolymorpheusContent = '';

    @ViewChild(TuiHostedDropdownComponent)
    private readonly hostedDropdown?: TuiHostedDropdownComponent;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    get focused(): boolean {
        return (
            isNativeFocused(this.nativeFocusableElement) ||
            (!!this.hostedDropdown && this.hostedDropdown.focused)
        );
    }

    get computedMask(): TuiTextMaskOptions {
        return this.textMaskOptions || EMPTY_MASK;
    }

    get maskedValue(): string {
        return this.conformToMask(this.value);
    }

    get canOpen(): boolean {
        return !this.computedDisabled && !this.readOnly && !!this.datalist;
    }

    onValueChange(value: string) {
        this.updateValue(this.unmaskHandler(value));
        this.open = true;
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onActiveZone(active: boolean) {
        this.updateFocused(active);
    }

    handleOption(item: string) {
        this.focusInput();
        this.updateValue(this.unmaskHandler(this.conformToMask(String(item))));
        this.open = false;
    }

    protected getFallbackValue(): string {
        return '';
    }

    private focusInput(preventScroll: boolean = false) {
        if (this.nativeFocusableElement) {
            setNativeFocused(this.nativeFocusableElement, true, preventScroll);
        }
    }

    private conformToMask(value: string): string {
        if (this.textMaskOptions === null || !value) {
            return value;
        }

        const {
            guide,
            placeholderChar,
            pipe,
            keepCharPositions,
            showMask,
            mask,
        } = this.textMaskOptions;
        const result = conformToMask(value, mask, {
            guide,
            placeholderChar,
            pipe,
            keepCharPositions,
            showMask,
        });

        return result.conformedValue;
    }
}
