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
    isNativeFocused,
    setNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
} from '@taiga-ui/cdk';
import {
    TUI_DATA_LIST_HOST,
    TuiDataListDirective,
    TuiDataListHost,
    TuiHorizontalDirection,
    TuiHostedDropdownComponent,
    TuiPrimitiveTextfieldComponent,
} from '@taiga-ui/core';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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
    implements TuiFocusableElementAccessor, TuiDataListHost<string> {
    @Input()
    @tuiDefaultProp()
    icon: string | null = null;

    @Input()
    @tuiDefaultProp()
    iconAlign: TuiHorizontalDirection = 'left';

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

    get canOpen(): boolean {
        return !this.computedDisabled && !this.readOnly && !!this.datalist;
    }

    onValueChange(value: string) {
        this.updateValue(value);
        this.open = true;
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onActiveZone(active: boolean) {
        this.updateFocused(active);
    }

    handleOption(item: unknown) {
        this.focusInput();
        this.updateValue(String(item));
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
}
