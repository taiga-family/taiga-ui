import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    HostBinding,
    inject,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiControl,
    TuiActiveZoneDirective,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiContext,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import {
    TUI_TEXTFIELD_SIZE,
    tuiAsDataListHost,
    TuiDataListDirective,
    TuiDataListHost,
    TuiHostedDropdownComponent,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
} from '@taiga-ui/core';
import {
    FIXED_DROPDOWN_CONTROLLER_PROVIDER,
    TUI_VALUE_ACCESSOR_PROVIDER,
} from '@taiga-ui/kit/providers';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-input',
    templateUrl: './input.template.html',
    styleUrls: ['./input.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TUI_VALUE_ACCESSOR_PROVIDER,
        tuiAsFocusableItemAccessor(TuiInputComponent),
        tuiAsDataListHost(TuiInputComponent),
        tuiAsControl(TuiInputComponent),
    ],
    viewProviders: [FIXED_DROPDOWN_CONTROLLER_PROVIDER],
})
export class TuiInputComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor, TuiDataListHost<string>
{
    @ViewChild(TuiHostedDropdownComponent)
    private readonly hostedDropdown?: TuiHostedDropdownComponent;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    protected readonly datalist: PolymorpheusContent<TuiContext<TuiActiveZoneDirective>>;

    public open = false;

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    public get focused(): boolean {
        return (
            tuiIsNativeFocused(this.nativeFocusableElement) ||
            (!!this.hostedDropdown && this.hostedDropdown.focused)
        );
    }

    protected get canOpen(): boolean {
        return this.interactive && !!this.datalist;
    }

    public onValueChange(value: string): void {
        this.value = value;
        this.open = true;
    }

    protected onActiveZone(active: boolean): void {
        this.updateFocused(active);
    }

    public handleOption(item: unknown): void {
        this.setNativeValue(String(item));
        this.focusInput();
        this.value = String(item);
        this.open = false;
    }

    protected getFallbackValue(): string {
        return '';
    }

    private focusInput(preventScroll = false): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.focus({preventScroll});
        }
    }

    private setNativeValue(value: string): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.value = value;
        }
    }
}
