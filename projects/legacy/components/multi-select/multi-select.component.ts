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
import type {
    TuiActiveZoneDirective,
    TuiBooleanHandler,
    TuiContext,
    TuiMapper,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {
    EMPTY_ARRAY,
    TUI_IS_MOBILE,
    TUI_TRUE_HANDLER,
    tuiArrayToggle,
    tuiIsNativeFocused,
    tuiIsString,
    tuiPure,
} from '@taiga-ui/cdk';
import type {
    TuiDataListAccessor,
    TuiDataListHost,
    TuiSizeL,
    TuiSizeM,
    TuiSizeS,
} from '@taiga-ui/core';
import {
    TUI_DATA_LIST_ACCESSOR,
    tuiAsDataListHost,
    TuiDataListDirective,
    TuiDropdownOpenDirective,
} from '@taiga-ui/core';
import type {TuiItemsHandlers} from '@taiga-ui/kit';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/kit';
import {
    AbstractTuiMultipleControl,
    tuiAsControl,
    TuiStringifiableItem,
} from '@taiga-ui/legacy/classes';
import {TUI_ARROW_MODE} from '@taiga-ui/legacy/components/arrow';
import {TuiInputTagComponent} from '@taiga-ui/legacy/components/input-tag';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
} from '@taiga-ui/legacy/directives';
import type {TuiFocusableElementAccessor} from '@taiga-ui/legacy/tokens';
import {tuiAsFocusableItemAccessor} from '@taiga-ui/legacy/tokens';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/legacy/utils';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import type {TuiMultiSelectOptions} from './multi-select.options';
import {TUI_MULTI_SELECT_OPTIONS} from './multi-select.options';
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

    @ViewChild(TuiDropdownOpenDirective)
    private readonly dropdown?: TuiDropdownOpenDirective;

    @ViewChild(TuiInputTagComponent)
    private readonly input?: TuiInputTagComponent;

    private readonly arrowMode = inject(TUI_ARROW_MODE);
    private readonly itemsHandlers = inject<TuiItemsHandlers<T>>(TUI_ITEMS_HANDLERS);
    private readonly options = inject<TuiMultiSelectOptions<T>>(TUI_MULTI_SELECT_OPTIONS);

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    protected readonly datalist: PolymorpheusContent<TuiContext<TuiActiveZoneDirective>>;

    protected open = false;
    protected readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    protected readonly isMobile: boolean = inject(TUI_IS_MOBILE);

    @Input()
    public stringify: TuiItemsHandlers<T>['stringify'] = this.itemsHandlers.stringify;

    @Input()
    public identityMatcher: TuiItemsHandlers<T>['identityMatcher'] =
        this.itemsHandlers.identityMatcher;

    @Input()
    public search: string | null = '';

    @Input()
    public placeholder = '';

    @Input()
    @HostBinding('class._editable')
    public editable = true;

    @Input()
    public disabledItemHandler: TuiItemsHandlers<T>['disabledItemHandler'] =
        this.itemsHandlers.disabledItemHandler;

    @Input()
    public valueContent: TuiMultiSelectOptions<T>['valueContent'] =
        this.options.valueContent;

    @Input()
    public tagValidator: TuiBooleanHandler<T> = TUI_TRUE_HANDLER;

    @Input()
    public rows: TuiMultiSelectOptions<T>['rows'] = this.options.rows;

    @Output()
    public readonly searchChange = new EventEmitter<string | null>();

    @HostBinding('attr.data-size')
    public get size(): TuiSizeL | TuiSizeS {
        return this.controller.size;
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.input?.nativeFocusableElement ?? null;
    }

    public get focused(): boolean {
        return !!this.input?.focused || !!this.dropdown?.focused;
    }

    public onValueChange(value: readonly T[]): void {
        this.value = value;
    }

    public onSearch(search: string | null): void {
        // Clearing sets the empty value, the dropdown should not be opened on clear.
        if (search !== '') {
            this.open = true;
        }

        this.updateSearch(search);
    }

    public override setDisabledState(): void {
        super.setDisabledState();
        this.open = false;
    }

    public handleOption(option: T): void {
        const {value, identityMatcher} = this;
        const index = value.findIndex(item => identityMatcher(item, option));

        this.value =
            index === -1 ? [...value, option] : value.filter((_, i) => i !== index);
        this.updateSearch(null);
    }

    protected get arrow(): PolymorpheusContent<
        TuiContext<TuiSizeL | TuiSizeM | TuiSizeS>
    > {
        return this.interactive ? this.arrowMode.interactive : this.arrowMode.disabled;
    }

    protected get nativeDropdownMode(): boolean {
        return !!this.nativeSelect && this.isMobile && !this.editable;
    }

    protected get computedValue(): readonly T[] {
        return this.computedGroup ? EMPTY_ARRAY : this.value;
    }

    // @bad TODO: think of a better way
    protected get searchOrSpace(): string {
        return this.computedGroup ? ' ' : this.searchString;
    }

    protected get searchString(): string {
        return this.search === null ? '' : this.search;
    }

    protected get computedGroup(): boolean {
        return (
            !!this.valueContent &&
            this.value.length > 0 &&
            (!this.focused || !this.editable)
        );
    }

    @tuiPure
    protected getStringifier(
        stringify: TuiStringHandler<T>,
    ): TuiStringHandler<TuiContext<T>> {
        return ({$implicit}) => stringify($implicit);
    }

    protected readonly valueMapper: TuiMapper<
        [readonly T[], TuiStringHandler<T>, boolean?],
        ReadonlyArray<TuiStringifiableItem<T>>
    > = (value, stringify, group) =>
        group
            ? EMPTY_ARRAY
            : value.map(item => new TuiStringifiableItem(item, stringify));

    protected readonly disabledItemHandlerWrapper: TuiMapper<
        [TuiBooleanHandler<T>],
        TuiBooleanHandler<TuiStringifiableItem<T> | string>
    > = handler => stringifiable =>
        tuiIsString(stringifiable) || handler(stringifiable.item);

    protected onSpace(event: Event): void {
        if (!this.editable) {
            event.preventDefault();
        }

        if (!this.readOnly) {
            this.open = true;
        }
    }

    protected onEnter(event: Event): void {
        const {value} = this;
        const options = this.accessor ? this.accessor.getOptions() : [];

        if (options.length !== 1) {
            return;
        }

        event.preventDefault();
        this.value = tuiArrayToggle(value, options[0]);
        this.updateSearch(null);
    }

    protected onClick({nativeFocusableElement}: TuiInputTagComponent): void {
        if (
            this.interactive &&
            nativeFocusableElement &&
            tuiIsNativeFocused(nativeFocusableElement)
        ) {
            this.open = !this.open;
        }
    }

    protected onInput(value: ReadonlyArray<TuiStringifiableItem<T>>): void {
        this.value = value.map(({item}) => item);
    }

    protected onActiveZone(active: boolean): void {
        this.updateFocused(active);
    }

    private updateSearch(search: string | null): void {
        if (this.search === search) {
            return;
        }

        this.search = search;
        this.searchChange.emit(search);
    }
}
