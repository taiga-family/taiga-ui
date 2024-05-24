import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    HostBinding,
    inject,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import type {
    TuiActiveZoneDirective,
    TuiContext,
    TuiFocusableElementAccessor,
} from '@taiga-ui/cdk';
import {
    AbstractTuiNullableControl,
    TUI_IS_MOBILE,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import type {
    TuiDataListHost,
    TuiSizeL,
    TuiSizeM,
    TuiSizeS,
    TuiValueContentContext,
} from '@taiga-ui/core';
import {
    TUI_TEXTFIELD_CLEANER,
    TUI_TEXTFIELD_SIZE,
    tuiAsDataListHost,
    tuiAsOptionContent,
    TuiDataListDirective,
    TuiHostedDropdownComponent,
    TuiPrimitiveTextfieldComponent,
} from '@taiga-ui/core';
import type {TuiItemsHandlers} from '@taiga-ui/kit';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER, TUI_ITEMS_HANDLERS} from '@taiga-ui/kit';
import {AbstractTuiNativeSelect} from '@taiga-ui/legacy/abstract';
import {TUI_ARROW_MODE} from '@taiga-ui/legacy/components/arrow';
import {TUI_SELECT_OPTION} from '@taiga-ui/legacy/components/select-option';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import type {TuiSelectOptions} from './select.options';
import {TUI_SELECT_OPTIONS} from './select.options';

@Component({
    selector: 'tui-select',
    templateUrl: './select.template.html',
    styleUrls: ['./select.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiSelectComponent),
        tuiAsControl(TuiSelectComponent),
        tuiAsDataListHost(TuiSelectComponent),
        tuiAsOptionContent(TUI_SELECT_OPTION),
    ],
    viewProviders: [FIXED_DROPDOWN_CONTROLLER_PROVIDER],
})
export class TuiSelectComponent<T>
    extends AbstractTuiNullableControl<T>
    implements TuiFocusableElementAccessor, TuiDataListHost<T>
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @ViewChild(TuiHostedDropdownComponent)
    private readonly hostedDropdown?: TuiHostedDropdownComponent;

    @ContentChild(AbstractTuiNativeSelect, {static: true})
    private readonly nativeSelect?: AbstractTuiNativeSelect;

    private readonly itemsHandlers = inject<TuiItemsHandlers<T>>(TUI_ITEMS_HANDLERS);
    private readonly textfieldCleaner = inject(TUI_TEXTFIELD_CLEANER);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    private readonly arrowMode = inject(TUI_ARROW_MODE);
    private readonly options = inject(TUI_SELECT_OPTIONS);

    @Input()
    public stringify: TuiItemsHandlers<T>['stringify'] = this.itemsHandlers.stringify;

    @Input()
    public identityMatcher: TuiItemsHandlers<T>['identityMatcher'] =
        this.itemsHandlers.identityMatcher;

    @Input()
    public valueContent: TuiSelectOptions<T>['valueContent'] = this.options.valueContent;

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    protected readonly datalist: PolymorpheusContent<TuiContext<TuiActiveZoneDirective>>;

    protected readonly isMobile = inject(TUI_IS_MOBILE);

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement ?? null;
    }

    public get focused(): boolean {
        return (
            tuiIsNativeFocused(this.nativeFocusableElement) ||
            (!!this.hostedDropdown && this.hostedDropdown.focused)
        );
    }

    public get computedValue(): string {
        return this.value === null ? '' : this.stringify(this.value) || ' ';
    }

    public onValueChange(value: T): void {
        this.value = value || null;
    }

    public handleOption(option: T): void {
        this.focusInput();
        this.value = option;
        this.hostedDropdown?.updateOpen(false);
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get arrow(): PolymorpheusContent<
        TuiContext<TuiSizeL | TuiSizeM | TuiSizeS>
    > {
        return !this.interactive ? this.arrowMode.disabled : this.arrowMode.interactive;
    }

    protected get nativeDropdownMode(): boolean {
        return !!this.nativeSelect && this.isMobile;
    }

    protected get computedContent(): PolymorpheusContent<TuiValueContentContext<T>> {
        return this.valueContent || this.computedValue;
    }

    protected onActiveZone(active: boolean): void {
        this.updateFocused(active);
    }

    protected onKeyDownDelete(): void {
        if (this.textfieldCleaner.cleaner) {
            this.value = null;
        }
    }

    private focusInput(preventScroll = false): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.focus({preventScroll});
        }
    }
}
