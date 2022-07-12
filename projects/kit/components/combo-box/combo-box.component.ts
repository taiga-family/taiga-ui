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
    isPresent,
    setNativeFocused,
    TUI_STRICT_MATCHER,
    TuiActiveZoneDirective,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    TuiStringMatcher,
} from '@taiga-ui/cdk';
import {
    TUI_DATA_LIST_ACCESSOR,
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
import {TUI_ARROW_MODE, TuiArrowMode} from '@taiga-ui/kit/components/arrow';
import {TUI_ITEMS_HANDLERS, TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_COMBO_BOX_PROVIDERS} from './combo-box.providers';

@Component({
    selector: 'tui-combo-box',
    templateUrl: './combo-box.template.html',
    styleUrls: ['./combo-box.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_COMBO_BOX_PROVIDERS,
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

    @Input()
    @tuiDefaultProp()
    stringify: TuiItemsHandlers<T>['stringify'] = this.itemsHandlers.stringify;

    @Input()
    @tuiDefaultProp()
    strictMatcher: TuiStringMatcher<T> = TUI_STRICT_MATCHER;

    @Input()
    @tuiDefaultProp()
    identityMatcher: TuiItemsHandlers<T>['identityMatcher'] =
        this.itemsHandlers.identityMatcher;

    @Input()
    @tuiDefaultProp()
    valueContent: PolymorpheusContent<TuiValueContentContext<T>> = '';

    @Input()
    @tuiDefaultProp()
    strict = true;

    @Input()
    @tuiDefaultProp()
    search: string | null = null;

    @Output()
    readonly searchChange = new EventEmitter<string | null>();

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    readonly datalist: PolymorpheusContent<
        TuiContextWithImplicit<TuiActiveZoneDirective>
    > = '';

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
    ) {
        super(control, changeDetectorRef);
    }

    get arrow(): PolymorpheusContent<
        TuiContextWithImplicit<TuiSizeS | TuiSizeM | TuiSizeL>
    > {
        return !this.interactive ? this.arrowMode.disabled : this.arrowMode.interactive;
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield ? this.textfield.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return (
            tuiIsNativeFocused(this.nativeFocusableElement) ||
            (!!this.hostedDropdown && this.hostedDropdown.focused)
        );
    }

    get nativeValue(): string {
        return this.value === null ? this.search || '' : this.stringify(this.value);
    }

    get showValueTemplate(): boolean {
        return isPresent(this.value) && !this.focused;
    }

    get computedContent(): PolymorpheusContent<TuiValueContentContext<T>> {
        return this.valueContent || this.nativeValue;
    }

    onActiveZone(active: boolean): void {
        this.updateFocused(active);
    }

    checkOption(option: T): void {
        if (!this.isStrictMatch(option)) {
            return;
        }

        this.updateValue(option);
        this.updateSearch(null);
    }

    handleOption(item: T): void {
        this.setNativeValue(this.stringify(item));
        this.focusInput();
        this.close();
        this.updateSearch(null);
        this.updateValue(item);
    }

    onFieldKeyDownEnter(event: Event): void {
        if (this.open) {
            event.preventDefault();
        }

        const options = this.accessor?.getOptions() || [];

        if (options.length !== 1) {
            return;
        }

        this.updateValue(options[0]);
        this.updateSearch(null);
        this.close();
    }

    onValueChange(value: string): void {
        this.updateSearch(value);

        const match = this.accessor?.getOptions().find(item => this.isStrictMatch(item));

        if (match !== undefined) {
            this.updateValue(match);
            this.updateSearch(null);

            return;
        }

        if (this.strict || this.search === '') {
            this.updateValue(null);
        }

        this.hostedDropdown?.updateOpen(true);
    }

    updateValue(value: T | null): void {
        super.updateValue(value);
    }

    onHovered(hovered: boolean): void {
        this.updateHovered(hovered);
    }

    toggle(): void {
        this.hostedDropdown?.updateOpen(!this.open);
    }

    private isStrictMatch(item: T): boolean {
        return this.strictMatcher(item, this.search || '', this.stringify);
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

    private focusInput(preventScroll: boolean = false): void {
        if (this.nativeFocusableElement) {
            setNativeFocused(this.nativeFocusableElement, true, preventScroll);
        }
    }
}
