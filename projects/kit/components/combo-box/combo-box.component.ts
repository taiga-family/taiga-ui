import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    Output,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiNullableControl,
    TUI_STRICT_MATCHER,
    TuiActiveZoneDirective,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiContext,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    tuiIsPresent,
    TuiStringMatcher,
} from '@taiga-ui/cdk';
import {
    TUI_DATA_LIST_ACCESSOR,
    TUI_TEXTFIELD_SIZE,
    tuiAsDataListHost,
    tuiAsOptionContent,
    TuiDataListAccessor,
    TuiDataListDirective,
    TuiDataListHost,
    TuiHostedDropdownComponent,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeM,
    TuiSizeS,
    TuiValueContentContext,
} from '@taiga-ui/core';
import {TUI_ARROW_MODE} from '@taiga-ui/kit/components/arrow';
import {TUI_SELECT_OPTION} from '@taiga-ui/kit/components/select-option';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {TUI_ITEMS_HANDLERS, TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-combo-box',
    templateUrl: './combo-box.template.html',
    styleUrls: ['./combo-box.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiComboBoxComponent),
        tuiAsDataListHost(TuiComboBoxComponent),
        tuiAsControl(TuiComboBoxComponent),
        tuiAsOptionContent(TUI_SELECT_OPTION),
    ],
    viewProviders: [FIXED_DROPDOWN_CONTROLLER_PROVIDER],
})
export class TuiComboBoxComponent<T>
    extends AbstractTuiNullableControl<T>
    implements TuiFocusableElementAccessor, TuiDataListHost<T>
{
    @ContentChild(TUI_DATA_LIST_ACCESSOR as any)
    private readonly accessor?: TuiDataListAccessor<T>;

    @ViewChild(TuiHostedDropdownComponent)
    private readonly hostedDropdown?: TuiHostedDropdownComponent;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly arrowMode = inject(TUI_ARROW_MODE);
    private readonly itemsHandlers = inject<TuiItemsHandlers<T>>(TUI_ITEMS_HANDLERS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    @Input()
    public stringify: TuiItemsHandlers<T>['stringify'] = this.itemsHandlers.stringify;

    @Input()
    public strictMatcher: TuiStringMatcher<T> | null = TUI_STRICT_MATCHER;

    @Input()
    public identityMatcher: TuiItemsHandlers<T>['identityMatcher'] =
        this.itemsHandlers.identityMatcher;

    @Input()
    public valueContent: PolymorpheusContent<TuiValueContentContext<T>>;

    @Input()
    public strict = true;

    @Input()
    public search: string | null = null;

    @Output()
    public readonly searchChange = new EventEmitter<string | null>();

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    protected readonly datalist: PolymorpheusContent<TuiContext<TuiActiveZoneDirective>>;

    public open = false;

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get arrow(): PolymorpheusContent<
        TuiContext<TuiSizeL | TuiSizeM | TuiSizeS>
    > {
        return !this.interactive ? this.arrowMode.disabled : this.arrowMode.interactive;
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement ?? null;
    }

    public get focused(): boolean {
        return (
            tuiIsNativeFocused(this.nativeFocusableElement) ||
            !!this.hostedDropdown?.focused
        );
    }

    public get nativeValue(): string {
        return this.value === null ? this.search || '' : this.stringify(this.value);
    }

    protected get showValueTemplate(): boolean {
        return tuiIsPresent(this.value) && !this.focused;
    }

    protected get computedContent(): PolymorpheusContent<TuiValueContentContext<T>> {
        return this.valueContent || this.nativeValue;
    }

    protected onActiveZone(active: boolean): void {
        this.updateFocused(active);
    }

    public checkOption(option: T): void {
        if (!this.isStrictMatch(option)) {
            return;
        }

        this.value = option;
        this.updateSearch(null);
    }

    public handleOption(item: T): void {
        this.focusInput();
        this.close();
        this.updateSearch(null);
        this.value = item;

        if (this.value) {
            this.setNativeValue(this.stringify(item));
        }
    }

    protected onFieldKeyDownEnter(event: Event): void {
        if (this.open) {
            event.preventDefault();
        }

        const options = this.accessor?.getOptions() || [];

        if (options.length !== 1) {
            return;
        }

        this.value = options[0];
        this.updateSearch(null);
        this.close();
    }

    public onValueChange(value: string): void {
        this.updateSearch(value);

        const match = this.accessor?.getOptions().find(item => this.isStrictMatch(item));

        if (match !== undefined) {
            this.value = match;
            this.updateSearch(null);

            return;
        }

        if (this.strict || this.search === '') {
            this.value = null;
        }

        // Clearing sets the empty value, the dropdown should not be opened on clear.
        if (this.search !== '') {
            this.hostedDropdown?.updateOpen(true);
        }
    }

    /** @deprecated use 'value' setter */
    protected override updateValue(value: T | null): void {
        super.updateValue(value);
    }

    public toggle(): void {
        this.hostedDropdown?.updateOpen(!this.open);
    }

    private isStrictMatch(item: T): boolean {
        return !!this.search && !!this.strictMatcher?.(item, this.search, this.stringify);
    }

    private close(): void {
        this.hostedDropdown?.updateOpen(false);
    }

    private updateSearch(search: string | null): void {
        if (this.search === search) {
            return;
        }

        this.search = search;
        this.searchChange.emit(search);
    }

    private setNativeValue(value: string): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.value = value;
        }
    }

    private focusInput(preventScroll = false): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.focus({preventScroll});
        }
    }
}
