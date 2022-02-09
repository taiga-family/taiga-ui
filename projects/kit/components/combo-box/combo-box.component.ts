import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    EventEmitter,
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
    AbstractTuiNullableControl,
    isNativeFocused,
    isPresent,
    setNativeFocused,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    TUI_DATA_LIST_ACCESSOR,
    TuiDataListAccessor,
    TuiDataListDirective,
    TuiDataListHost,
    TuiHostedDropdownComponent,
    TuiPrimitiveTextfieldComponent,
    TuiValueContentContext,
} from '@taiga-ui/core';
import {TUI_ARROW_MODE, TuiArrowMode} from '@taiga-ui/kit/components/arrow';
import {TUI_ITEMS_HANDLERS, TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_COMBO_BOX_PROVIDERS} from './combo-box.providers';
import {TUI_COMBO_BOX_OPTIONS, TuiComboBoxOptions} from './combo-box-options';

@Component({
    selector: 'tui-combo-box',
    templateUrl: './combo-box.template.html',
    styleUrls: ['./combo-box.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_COMBO_BOX_PROVIDERS,
})
export class TuiComboBoxComponent<T>
    extends AbstractTuiNullableControl<T | string>
    implements TuiFocusableElementAccessor, TuiDataListHost<T>
{
    @ContentChild(TUI_DATA_LIST_ACCESSOR as any)
    private readonly accessor?: TuiDataListAccessor<T>;

    @ViewChild(TuiHostedDropdownComponent)
    private readonly hostedDropdown?: TuiHostedDropdownComponent;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @Input()
    @tuiDefaultProp()
    stringify: TuiItemsHandlers<T>['stringify'] = this.itemsHandlers.stringify;

    @Input()
    @tuiDefaultProp()
    strictMatcher: TuiComboBoxOptions<T>['strictMatcher'] = this.options.strictMatcher;

    @Input()
    @tuiDefaultProp()
    identityMatcher: TuiItemsHandlers<T>['identityMatcher'] =
        this.itemsHandlers.identityMatcher;

    @Input()
    @tuiDefaultProp()
    valueContent: TuiComboBoxOptions<T>['valueContent'] = this.options.valueContent;

    @Input()
    @tuiDefaultProp()
    strict: TuiComboBoxOptions<T>['strict'] = this.options.strict;

    @Input()
    @tuiDefaultProp()
    search: string | null = '';

    @Output()
    readonly searchChange = new EventEmitter<string | null>();

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    readonly datalist: PolymorpheusContent = '';

    open = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_ARROW_MODE)
        private readonly arrowMode: TuiArrowMode,
        @Inject(TUI_ITEMS_HANDLERS)
        private readonly itemsHandlers: TuiItemsHandlers<T>,
        @Inject(TUI_COMBO_BOX_OPTIONS)
        private readonly options: TuiComboBoxOptions<T>,
    ) {
        super(control, changeDetectorRef);
    }

    get arrow(): PolymorpheusContent {
        return !this.interactive ? this.arrowMode.disabled : this.arrowMode.interactive;
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield ? this.textfield.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return (
            isNativeFocused(this.nativeFocusableElement) ||
            (!!this.hostedDropdown && this.hostedDropdown.focused)
        );
    }

    get nativeValue(): string {
        if (this.value === null) {
            return this.search || '';
        }

        return typeof this.value === 'string' ? this.value : this.stringify(this.value);
    }

    get showValueTemplate(): boolean {
        return isPresent(this.value) && !this.focused;
    }

    get computedContent(): PolymorpheusContent<TuiValueContentContext<T>> {
        return this.valueContent || this.nativeValue;
    }

    @tuiPure
    computeContext(
        $implicit: T | null,
        active: boolean,
    ): TuiValueContentContext<T | null> {
        return {
            $implicit,
            active,
        };
    }

    onActiveZone(active: boolean) {
        this.updateFocused(active);
    }

    checkOption(option: T) {
        if (!this.isStrictMatch(option)) {
            return;
        }

        this.updateValue(option);
        this.updateSearch(null);
    }

    handleOption(item: T) {
        this.setNativeValue(this.stringify(item));
        this.focusInput();
        this.close();
        this.updateSearch(null);
        this.updateValue(item);
    }

    onFieldKeyDownEnter(event: KeyboardEvent) {
        if (this.open) {
            event.preventDefault();
        }

        const options = this.accessor ? this.accessor.getOptions() : [];

        if (options.length !== 1) {
            return;
        }

        this.updateValue(options[0]);
        this.updateSearch(null);
        this.close();
    }

    onValueChange(value: string) {
        this.updateSearch(value);

        const match =
            this.accessor &&
            this.accessor.getOptions().find(item => this.isStrictMatch(item));

        if (match !== undefined) {
            this.updateValue(match);
            this.updateSearch(null);

            return;
        }

        this.updateValue(this.strict || this.search === '' ? null : this.search);
        this.hostedDropdown?.updateOpen(true);
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    toggle() {
        this.hostedDropdown?.updateOpen(!this.open);
    }

    private isStrictMatch(item: T): boolean {
        return this.strictMatcher(item, this.search || '', this.stringify);
    }

    private close() {
        this.hostedDropdown?.updateOpen(false);
    }

    private updateSearch(search: string | null) {
        if (this.search === search) {
            return;
        }

        this.search = search;
        this.searchChange.emit(search);
    }

    private setNativeValue(value: string) {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.value = value;
        }
    }

    private focusInput(preventScroll: boolean = false) {
        if (this.nativeFocusableElement) {
            setNativeFocused(this.nativeFocusableElement, true, preventScroll);
        }
    }
}
