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
import type {TuiActiveZone, TuiContext, TuiStringMatcher} from '@taiga-ui/cdk';
import {TUI_STRICT_MATCHER, tuiIsNativeFocused, tuiIsPresent} from '@taiga-ui/cdk';
import type {
    TuiDataListAccessor,
    TuiDataListHost,
    TuiSizeL,
    TuiSizeM,
    TuiSizeS,
    TuiValueContentContext,
} from '@taiga-ui/core';
import {
    TUI_DATA_LIST_ACCESSOR,
    tuiAsDataListHost,
    tuiAsOptionContent,
    TuiDataListDirective,
    TuiDropdownOpenDirective,
} from '@taiga-ui/core';
import type {TuiItemsHandlers} from '@taiga-ui/kit';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/kit';
import {AbstractTuiNullableControl, tuiAsControl} from '@taiga-ui/legacy/classes';
import {TUI_ARROW_MODE} from '@taiga-ui/legacy/components/arrow';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/legacy/components/primitive-textfield';
import {TUI_SELECT_OPTION} from '@taiga-ui/legacy/components/select-option';
import {TUI_TEXTFIELD_SIZE} from '@taiga-ui/legacy/directives';
import type {TuiFocusableElementAccessor} from '@taiga-ui/legacy/tokens';
import {tuiAsFocusableItemAccessor} from '@taiga-ui/legacy/tokens';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/legacy/utils';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

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

    @ViewChild(TuiDropdownOpenDirective)
    private readonly dropdown?: TuiDropdownOpenDirective;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly arrowMode = inject(TUI_ARROW_MODE);
    private readonly itemsHandlers = inject<TuiItemsHandlers<T>>(TUI_ITEMS_HANDLERS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    protected readonly datalist: PolymorpheusContent<TuiContext<TuiActiveZone>>;

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

    public open = false;

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

    public get nativeValue(): string {
        return this.value === null ? this.search || '' : this.stringify(this.value);
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
            this.open = true;
        }
    }

    public toggle(): void {
        this.open = !this.open;
    }

    protected get arrow(): PolymorpheusContent<
        TuiContext<TuiSizeL | TuiSizeM | TuiSizeS>
    > {
        return !this.interactive ? this.arrowMode.disabled : this.arrowMode.interactive;
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

    private isStrictMatch(item: T): boolean {
        return !!this.search && !!this.strictMatcher?.(item, this.search, this.stringify);
    }

    private close(): void {
        this.open = false;
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
