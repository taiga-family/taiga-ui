import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    EventEmitter,
    forwardRef,
    HostBinding,
    Inject,
    Input,
    Optional,
    Output,
    Self,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiMultipleControl,
    ALWAYS_FALSE_HANDLER,
    EMPTY_ARRAY,
    isNativeFocused,
    setNativeFocused,
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_DEFAULT_STRINGIFY,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiBooleanHandler,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiIdentityMatcher,
    TuiMapper,
    tuiPure,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {
    TUI_DATA_LIST_ACCESSOR,
    TUI_DATA_LIST_HOST,
    TUI_TEXTFIELD_LABEL_OUTSIDE,
    TuiDataListAccessor,
    TuiDataListDirective,
    TuiDataListHost,
    TuiHostedDropdownComponent,
    TuiSvgService,
    TuiTextfieldLabelOutsideDirective,
} from '@taiga-ui/core';
import {TuiStringifiableItem} from '@taiga-ui/kit/classes';
import {TuiInputTagComponent} from '@taiga-ui/kit/components/input-tag';
import {iconBlank} from '@taiga-ui/kit/constants';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-multi-select',
    templateUrl: './multi-select.template.html',
    styleUrls: ['./multi-select.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiMultiSelectComponent),
        },
        {
            provide: TUI_DATA_LIST_HOST,
            useExisting: forwardRef(() => TuiMultiSelectComponent),
        },
        FIXED_DROPDOWN_CONTROLLER_PROVIDER,
    ],
})
export class TuiMultiSelectComponent<T>
    extends AbstractTuiMultipleControl<T>
    implements TuiFocusableElementAccessor, TuiDataListHost<T> {
    @Input()
    @tuiDefaultProp()
    stringify: TuiStringHandler<T> = TUI_DEFAULT_STRINGIFY;

    @Input()
    @tuiDefaultProp()
    identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    @tuiDefaultProp()
    expandable = true;

    @Input()
    @tuiDefaultProp()
    search: string | null = '';

    @Input()
    @HostBinding('class._editable')
    @tuiDefaultProp()
    editable = true;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<T> = ALWAYS_FALSE_HANDLER;

    @Input()
    @tuiDefaultProp()
    valueContent: PolymorpheusContent<TuiContextWithImplicit<ReadonlyArray<T>>> = '';

    @Output()
    readonly searchChange = new EventEmitter<string | null>();

    open = false;

    readonly valueMapper: TuiMapper<
        ReadonlyArray<T>,
        ReadonlyArray<TuiStringifiableItem<T>>
    > = (value, stringify: TuiStringHandler<T>, group: boolean) =>
        group
            ? EMPTY_ARRAY
            : value.map(item => new TuiStringifiableItem(item, stringify));

    readonly disabledItemHandlerWrapper: TuiMapper<
        TuiBooleanHandler<T>,
        TuiBooleanHandler<TuiStringifiableItem<T>>
    > = handler => stringifiable =>
        typeof stringifiable === 'string' || handler(stringifiable.item);

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    readonly datalist: PolymorpheusContent = '';

    @ContentChild(TUI_DATA_LIST_ACCESSOR as any)
    private readonly accessor?: TuiDataListAccessor<T>;

    @ViewChild(TuiHostedDropdownComponent)
    private readonly hostedDropdown?: TuiHostedDropdownComponent;

    @ViewChild(TuiInputTagComponent)
    private readonly input?: TuiInputTagComponent;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TuiSvgService) svgService: TuiSvgService,
        @Inject(TUI_TEXTFIELD_LABEL_OUTSIDE)
        readonly textfieldLabelOutside: TuiTextfieldLabelOutsideDirective,
    ) {
        super(control, changeDetectorRef);

        svgService.define({iconBlank});
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.input ? this.input.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return (
            (!!this.input && this.input.focused) ||
            (!!this.hostedDropdown && this.hostedDropdown.focused)
        );
    }

    get computedValue(): ReadonlyArray<T> {
        return this.computedGroup ? EMPTY_ARRAY : this.value;
    }

    // @bad TODO: think of a better way
    get searchOrSpace(): string {
        return this.computedGroup ? ' ' : this.searchString;
    }

    get searchString(): string {
        return this.search === null ? '' : this.search;
    }

    get tagIcon(): string {
        return this.interactive ? 'iconBlank' : 'tuiIconChevronDownLarge';
    }

    get interactive(): boolean {
        return !this.disabled && !this.readOnly;
    }

    get inputHidden(): boolean {
        return !this.editable && !this.computedGroup;
    }

    get computedGroup(): boolean {
        return (
            !!this.valueContent &&
            this.value.length > 0 &&
            (!this.focused || !this.editable)
        );
    }

    get context(): TuiContextWithImplicit<ReadonlyArray<T>> {
        return this.getContext(this.value);
    }

    @tuiPure
    getStringifier(
        stringify: TuiStringHandler<T>,
    ): TuiStringHandler<TuiContextWithImplicit<T>> {
        return ({$implicit}) => stringify($implicit);
    }

    onHoveredChange(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onSpace(event: KeyboardEvent) {
        if (!this.editable) {
            event.preventDefault();
        }

        if (!this.readOnly) {
            this.open = true;
        }
    }

    handleOption(option: T) {
        const {value, identityMatcher} = this;
        const index = value.findIndex(item => identityMatcher(item, option));

        this.updateValue(
            index === -1 ? [...value, option] : value.filter((_, i) => i !== index),
        );
        this.updateSearch(null);
    }

    onEnter(event: KeyboardEvent) {
        const {value} = this;
        const options = this.accessor ? this.accessor.getOptions() : [];

        if (options.length !== 1) {
            return;
        }

        const index = value.indexOf(options[0]);

        event.preventDefault();
        this.updateValue(
            index === -1
                ? [...value, options[0]]
                : [...value.slice(0, index), ...value.slice(index + 1)],
        );
        this.updateSearch(null);
    }

    onClick({nativeFocusableElement}: TuiInputTagComponent) {
        if (
            this.interactive &&
            nativeFocusableElement &&
            isNativeFocused(nativeFocusableElement)
        ) {
            this.open = !this.open;
        }
    }

    onArrowClick() {
        this.open = !this.open;
        this.focusInput();
    }

    onInput(value: ReadonlyArray<TuiStringifiableItem<T>>) {
        this.updateValue(value.map(({item}) => item));
    }

    onSearch(search: string | null) {
        this.open = true;
        this.updateSearch(search);
    }

    onActiveZone(active: boolean) {
        this.updateFocused(active);
    }

    setDisabledState() {
        super.setDisabledState();
        this.open = false;
    }

    private updateSearch(search: string | null) {
        if (this.search === search) {
            return;
        }

        this.search = search;
        this.searchChange.emit(search);
    }

    private focusInput(preventScroll: boolean = false) {
        if (this.nativeFocusableElement) {
            setNativeFocused(this.nativeFocusableElement, true, preventScroll);
        }
    }

    @tuiPure
    private getContext(
        $implicit: ReadonlyArray<T>,
    ): TuiContextWithImplicit<ReadonlyArray<T>> {
        return {$implicit};
    }
}
