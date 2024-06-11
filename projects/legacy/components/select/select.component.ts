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
    TUI_IS_MOBILE,
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
    tuiAsDataListHost,
    tuiAsOptionContent,
    TuiDataListDirective,
    TuiDropdownOpenDirective,
} from '@taiga-ui/core';
import type {TuiItemsHandlers} from '@taiga-ui/kit';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/kit';
import {
    AbstractTuiNativeSelect,
    AbstractTuiNullableControl,
    tuiAsControl,
} from '@taiga-ui/legacy/classes';
import {TUI_ARROW_MODE} from '@taiga-ui/legacy/components/arrow';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/legacy/components/primitive-textfield';
import {TUI_SELECT_OPTION} from '@taiga-ui/legacy/components/select-option';
import {TUI_TEXTFIELD_CLEANER, TUI_TEXTFIELD_SIZE} from '@taiga-ui/legacy/directives';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/legacy/utils';
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

    @ViewChild(TuiDropdownOpenDirective)
    private readonly dropdown?: TuiDropdownOpenDirective;

    @ContentChild(AbstractTuiNativeSelect, {static: true})
    private readonly nativeSelect?: AbstractTuiNativeSelect;

    private readonly itemsHandlers = inject<TuiItemsHandlers<T>>(TUI_ITEMS_HANDLERS);
    private readonly textfieldCleaner = inject(TUI_TEXTFIELD_CLEANER);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    private readonly arrowMode = inject(TUI_ARROW_MODE);
    private readonly options = inject(TUI_SELECT_OPTIONS);

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    protected readonly datalist: PolymorpheusContent<TuiContext<TuiActiveZoneDirective>>;

    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected open = false;

    @Input()
    public stringify: TuiItemsHandlers<T>['stringify'] = this.itemsHandlers.stringify;

    @Input()
    public identityMatcher: TuiItemsHandlers<T>['identityMatcher'] =
        this.itemsHandlers.identityMatcher;

    @Input()
    public valueContent: TuiSelectOptions<T>['valueContent'] = this.options.valueContent;

    @HostBinding('attr.data-size')
    public get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement ?? null;
    }

    public get focused(): boolean {
        return (
            tuiIsNativeFocused(this.nativeFocusableElement) || !!this.dropdown?.focused
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
        this.open = false;
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
