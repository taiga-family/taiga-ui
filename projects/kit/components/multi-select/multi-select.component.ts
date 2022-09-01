import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    EventEmitter,
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
    EMPTY_ARRAY,
    TuiActiveZoneDirective,
    tuiArrayToggle,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiBooleanHandler,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    tuiIsString,
    TuiMapper,
    tuiPure,
    TuiStringHandler,
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
    TuiSvgService,
    TuiTextfieldController,
} from '@taiga-ui/core';
import {TuiStringifiableItem} from '@taiga-ui/kit/classes';
import {TUI_ARROW_MODE, TuiArrowMode} from '@taiga-ui/kit/components/arrow';
import {TuiInputTagComponent} from '@taiga-ui/kit/components/input-tag';
import {iconBlank} from '@taiga-ui/kit/constants';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {TUI_ITEMS_HANDLERS, TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_MULTI_SELECT_OPTIONS, TuiMultiSelectOptions} from './multi-select-options';

@Component({
    selector: `tui-multi-select`,
    templateUrl: `./multi-select.template.html`,
    styleUrls: [`./multi-select.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
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

    @ViewChild(TuiHostedDropdownComponent)
    private readonly hostedDropdown?: TuiHostedDropdownComponent;

    @ViewChild(TuiInputTagComponent)
    private readonly input?: TuiInputTagComponent;

    @Input()
    @tuiDefaultProp()
    stringify: TuiItemsHandlers<T>['stringify'] = this.itemsHandlers.stringify;

    @Input()
    @tuiDefaultProp()
    identityMatcher: TuiItemsHandlers<T>['identityMatcher'] =
        this.itemsHandlers.identityMatcher;

    @Input()
    @tuiDefaultProp()
    expandable: TuiMultiSelectOptions<T>['expandable'] = this.options.expandable;

    @Input()
    @tuiDefaultProp()
    search: string | null = ``;

    @Input()
    @tuiDefaultProp()
    placeholder = ``;

    @Input()
    @HostBinding(`class._editable`)
    @tuiDefaultProp()
    editable = true;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiItemsHandlers<T>['disabledItemHandler'] =
        this.itemsHandlers.disabledItemHandler;

    @Input()
    @tuiDefaultProp()
    valueContent: TuiMultiSelectOptions<T>['valueContent'] = this.options.valueContent;

    @Output()
    readonly searchChange = new EventEmitter<string | null>();

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    readonly datalist: PolymorpheusContent<
        TuiContextWithImplicit<TuiActiveZoneDirective>
    > = ``;

    open = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TuiSvgService) svgService: TuiSvgService,
        @Inject(TUI_ARROW_MODE)
        private readonly arrowMode: TuiArrowMode,
        @Inject(TUI_ITEMS_HANDLERS)
        private readonly itemsHandlers: TuiItemsHandlers<T>,
        @Inject(TUI_MULTI_SELECT_OPTIONS)
        private readonly options: TuiMultiSelectOptions<T>,
        @Inject(TUI_TEXTFIELD_WATCHED_CONTROLLER)
        readonly controller: TuiTextfieldController,
    ) {
        super(control, changeDetectorRef);

        svgService.define({iconBlank});
    }

    @HostBinding(`attr.data-size`)
    get size(): TuiSizeL | TuiSizeS {
        return this.controller.size;
    }

    get arrow(): PolymorpheusContent<
        TuiContextWithImplicit<TuiSizeS | TuiSizeM | TuiSizeL>
    > {
        return !this.interactive ? this.arrowMode.disabled : this.arrowMode.interactive;
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

    get computedValue(): readonly T[] {
        return this.computedGroup ? EMPTY_ARRAY : this.value;
    }

    // @bad TODO: think of a better way
    get searchOrSpace(): string {
        return this.computedGroup ? ` ` : this.searchString;
    }

    get searchString(): string {
        return this.search === null ? `` : this.search;
    }

    /**
     * Pass empty icon to InputTag (inside this component)
     * to prevent overflow of arrow icon by many tags
     */
    get tagIcon(): string {
        return this.interactive ? `iconBlank` : ``;
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

    @tuiPure
    getStringifier(
        stringify: TuiStringHandler<T>,
    ): TuiStringHandler<TuiContextWithImplicit<T>> {
        return ({$implicit}) => stringify($implicit);
    }

    readonly valueMapper: TuiMapper<
        readonly T[],
        ReadonlyArray<TuiStringifiableItem<T>>
    > = (value, stringify: TuiStringHandler<T>, group: boolean) =>
        group
            ? EMPTY_ARRAY
            : value.map(item => new TuiStringifiableItem(item, stringify));

    readonly disabledItemHandlerWrapper: TuiMapper<
        TuiBooleanHandler<T>,
        TuiBooleanHandler<string | TuiStringifiableItem<T>>
    > = handler => stringifiable =>
        tuiIsString(stringifiable) || handler(stringifiable.item);

    onSpace(event: Event): void {
        if (!this.editable) {
            event.preventDefault();
        }

        if (!this.readOnly) {
            this.open = true;
        }
    }

    handleOption(option: T): void {
        const {value, identityMatcher} = this;
        const index = value.findIndex(item => identityMatcher(item, option));

        this.updateValue(
            index === -1 ? [...value, option] : value.filter((_, i) => i !== index),
        );
        this.updateSearch(null);
    }

    onEnter(event: Event): void {
        const {value} = this;
        const options = this.accessor ? this.accessor.getOptions() : [];

        if (options.length !== 1) {
            return;
        }

        event.preventDefault();
        this.updateValue(tuiArrayToggle(value, options[0]));
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

    onArrowClick(): void {
        this.hostedDropdown?.updateOpen(!this.open);
        this.focusInput();
    }

    onInput(value: ReadonlyArray<TuiStringifiableItem<T>>): void {
        this.updateValue(value.map(({item}) => item));
    }

    onSearch(search: string | null): void {
        this.open = true;
        this.updateSearch(search);
    }

    onActiveZone(active: boolean): void {
        this.updateFocused(active);
    }

    override setDisabledState(): void {
        super.setDisabledState();
        this.open = false;
    }

    private updateSearch(search: string | null): void {
        if (this.search === search) {
            return;
        }

        this.search = search;
        this.searchChange.emit(search);
    }

    private focusInput(preventScroll: boolean = false): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.focus({preventScroll});
        }
    }
}
