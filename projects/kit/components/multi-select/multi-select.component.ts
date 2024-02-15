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
    AbstractTuiMultipleControl,
    ALWAYS_TRUE_HANDLER,
    EMPTY_ARRAY,
    TUI_IS_MOBILE,
    TuiActiveZoneDirective,
    tuiArrayToggle,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiBooleanHandler,
    TuiContext,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    tuiIsString,
    tuiPure,
    TuiStringHandler,
    TuiTypedMapper,
} from '@taiga-ui/cdk';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_DATA_LIST_ACCESSOR,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    tuiAsDataListHost,
    TuiDataListAccessor,
    TuiDataListDirective,
    TuiDataListHost,
    TuiHostedDropdownComponent,
    TuiSizeL,
    TuiSizeM,
    TuiSizeS,
} from '@taiga-ui/core';
import {TuiStringifiableItem} from '@taiga-ui/kit/classes';
import {TUI_ARROW_MODE} from '@taiga-ui/kit/components/arrow';
import {TuiInputTagComponent} from '@taiga-ui/kit/components/input-tag';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {TUI_ITEMS_HANDLERS, TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_MULTI_SELECT_OPTIONS, TuiMultiSelectOptions} from './multi-select.options';
import {AbstractTuiNativeMultiSelect} from './native-multi-select/native-multi-select';

@Component({
    selector: 'tui-multi-select',
    templateUrl: './multi-select.template.html',
    styleUrls: ['./multi-select.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'[class._expandable]': 'rows > 1'},
    providers: [
        tuiAsFocusableItemAccessor(TuiMultiSelectComponent),
        tuiAsControl(TuiMultiSelectComponent),
        tuiAsDataListHost(TuiMultiSelectComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
    viewProviders: [FIXED_DROPDOWN_CONTROLLER_PROVIDER],
})
export class TuiMultiSelectComponent<T>
    extends AbstractTuiMultipleControl<T>
    implements TuiFocusableElementAccessor, TuiDataListHost<T>
{
    @ContentChild(TUI_DATA_LIST_ACCESSOR as any)
    private readonly accessor?: TuiDataListAccessor<T>;

    @ContentChild(AbstractTuiNativeMultiSelect, {static: true})
    private readonly nativeSelect?: AbstractTuiNativeMultiSelect<T>;

    @ViewChild(TuiHostedDropdownComponent)
    private readonly hostedDropdown?: TuiHostedDropdownComponent;

    @ViewChild(TuiInputTagComponent)
    private readonly input?: TuiInputTagComponent;

    private readonly arrowMode = inject(TUI_ARROW_MODE);
    private readonly itemsHandlers = inject<TuiItemsHandlers<T>>(TUI_ITEMS_HANDLERS);
    private readonly options = inject<TuiMultiSelectOptions<T>>(TUI_MULTI_SELECT_OPTIONS);

    @Input()
    stringify: TuiItemsHandlers<T>['stringify'] = this.itemsHandlers.stringify;

    @Input()
    identityMatcher: TuiItemsHandlers<T>['identityMatcher'] =
        this.itemsHandlers.identityMatcher;

    @Input()
    search: string | null = '';

    @Input()
    placeholder = '';

    @Input()
    @HostBinding('class._editable')
    editable = true;

    @Input()
    disabledItemHandler: TuiItemsHandlers<T>['disabledItemHandler'] =
        this.itemsHandlers.disabledItemHandler;

    @Input()
    valueContent: TuiMultiSelectOptions<T>['valueContent'] = this.options.valueContent;

    @Input()
    tagValidator: TuiBooleanHandler<T> = ALWAYS_TRUE_HANDLER;

    @Input()
    rows: TuiMultiSelectOptions<T>['rows'] = this.options.rows;

    @Output()
    readonly searchChange = new EventEmitter<string | null>();

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    readonly datalist: PolymorpheusContent<TuiContext<TuiActiveZoneDirective>>;

    open = false;

    readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    readonly isMobile: boolean = inject(TUI_IS_MOBILE);

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.controller.size;
    }

    get arrow(): PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeM | TuiSizeS>> {
        return this.interactive ? this.arrowMode.interactive : this.arrowMode.disabled;
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.input?.nativeFocusableElement ?? null;
    }

    get focused(): boolean {
        return !!this.input?.focused || !!this.hostedDropdown?.focused;
    }

    get nativeDropdownMode(): boolean {
        return !!this.nativeSelect && this.isMobile && !this.editable;
    }

    get computedValue(): readonly T[] {
        return this.computedGroup ? EMPTY_ARRAY : this.value;
    }

    // @bad TODO: think of a better way
    get searchOrSpace(): string {
        return this.computedGroup ? ' ' : this.searchString;
    }

    get searchString(): string {
        return this.search === null ? '' : this.search;
    }

    get computedGroup(): boolean {
        return (
            !!this.valueContent &&
            this.value.length > 0 &&
            (!this.focused || !this.editable)
        );
    }

    @tuiPure
    getStringifier(stringify: TuiStringHandler<T>): TuiStringHandler<TuiContext<T>> {
        return ({$implicit}) => stringify($implicit);
    }

    readonly valueMapper: TuiTypedMapper<
        [readonly T[], TuiStringHandler<T>, boolean?],
        ReadonlyArray<TuiStringifiableItem<T>>
    > = (value, stringify, group) =>
        group
            ? EMPTY_ARRAY
            : value.map(item => new TuiStringifiableItem(item, stringify));

    readonly disabledItemHandlerWrapper: TuiTypedMapper<
        [TuiBooleanHandler<T>],
        TuiBooleanHandler<TuiStringifiableItem<T> | string>
    > = handler => stringifiable =>
        tuiIsString(stringifiable) || handler(stringifiable.item);

    onSpace(event: Event): void {
        if (!this.editable) {
            event.preventDefault();
        }

        if (!this.readOnly) {
            this.hostedDropdown?.updateOpen(true);
        }
    }

    handleOption(option: T): void {
        const {value, identityMatcher} = this;
        const index = value.findIndex(item => identityMatcher(item, option));

        this.value =
            index === -1 ? [...value, option] : value.filter((_, i) => i !== index);
        this.updateSearch(null);
    }

    onEnter(event: Event): void {
        const {value} = this;
        const options = this.accessor ? this.accessor.getOptions() : [];

        if (options.length !== 1) {
            return;
        }

        event.preventDefault();
        this.value = tuiArrayToggle(value, options[0]);
        this.updateSearch(null);
    }

    onClick({nativeFocusableElement}: TuiInputTagComponent): void {
        if (
            this.interactive &&
            nativeFocusableElement &&
            tuiIsNativeFocused(nativeFocusableElement)
        ) {
            this.hostedDropdown?.updateOpen(!this.open);
        }
    }

    onInput(value: ReadonlyArray<TuiStringifiableItem<T>>): void {
        this.value = value.map(({item}) => item);
    }

    onValueChange(value: readonly T[]): void {
        this.value = value;
    }

    onSearch(search: string | null): void {
        // Clearing sets the empty value, the dropdown should not be opened on clear.
        if (search !== '') {
            this.hostedDropdown?.updateOpen(true);
        }

        this.updateSearch(search);
    }

    onActiveZone(active: boolean): void {
        this.updateFocused(active);
    }

    override setDisabledState(): void {
        super.setDisabledState();
        this.hostedDropdown?.updateOpen(false);
    }

    private updateSearch(search: string | null): void {
        if (this.search === search) {
            return;
        }

        this.search = search;
        this.searchChange.emit(search);
    }
}
