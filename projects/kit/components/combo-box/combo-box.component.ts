import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    EventEmitter,
    forwardRef,
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
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_DEFAULT_STRINGIFY,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TUI_STRICT_MATCHER,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiIdentityMatcher,
    tuiPure,
    TuiStringHandler,
    TuiStringMatcher,
} from '@taiga-ui/cdk';
import {
    TUI_DATA_LIST_ACCESSOR,
    TUI_DATA_LIST_HOST,
    TUI_OPTION_CONTENT,
    TuiDataListAccessor,
    TuiDataListDirective,
    TuiDataListHost,
    TuiHostedDropdownComponent,
    TuiPrimitiveTextfieldComponent,
    TuiValueContentContext,
} from '@taiga-ui/core';
import {TUI_ARROW} from '@taiga-ui/kit/components/arrow';
import {TUI_SELECT_OPTION} from '@taiga-ui/kit/components/select-option';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

// TODO: remove in ivy compilation
export const COMBOBOX_OPTION: any = TUI_SELECT_OPTION;

@Component({
    selector: 'tui-combo-box',
    templateUrl: './combo-box.template.html',
    styleUrls: ['./combo-box.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiComboBoxComponent),
        },
        {
            provide: TUI_DATA_LIST_HOST,
            useExisting: forwardRef(() => TuiComboBoxComponent),
        },
        {
            provide: TUI_OPTION_CONTENT,
            useValue: COMBOBOX_OPTION,
        },
        FIXED_DROPDOWN_CONTROLLER_PROVIDER,
    ],
})
export class TuiComboBoxComponent<T>
    extends AbstractTuiNullableControl<T | string>
    implements TuiFocusableElementAccessor, TuiDataListHost<T> {
    @Input()
    @tuiDefaultProp()
    stringify: TuiStringHandler<T | string> = TUI_DEFAULT_STRINGIFY;

    @Input()
    @tuiDefaultProp()
    strictMatcher: TuiStringMatcher<T> = TUI_STRICT_MATCHER;

    @Input()
    @tuiDefaultProp()
    identityMatcher: TuiIdentityMatcher<T | string> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    @tuiDefaultProp()
    valueContent: PolymorpheusContent<TuiValueContentContext<T>> = '';

    @Input()
    @tuiDefaultProp()
    strict = true;

    @Input()
    @tuiDefaultProp()
    search: string | null = '';

    @Output()
    readonly searchChange = new EventEmitter<string | null>();

    readonly arrow: PolymorpheusContent = TUI_ARROW;

    open = false;

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    readonly datalist: PolymorpheusContent = '';

    @ContentChild(TUI_DATA_LIST_ACCESSOR as any)
    private readonly accessor?: TuiDataListAccessor<T>;

    @ViewChild(TuiHostedDropdownComponent)
    private readonly hostedDropdown?: TuiHostedDropdownComponent;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        super(control, changeDetectorRef);
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
        return this.value === null ? this.search || '' : this.stringify(this.value);
    }

    get showValueTemplate(): boolean {
        return isPresent(this.value) && !this.focused;
    }

    get canOpen(): boolean {
        return !this.computedDisabled && !this.readOnly;
    }

    get computedContent(): PolymorpheusContent<TuiValueContentContext<T>> {
        return this.valueContent || this.nativeValue;
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

    onInput(value: string) {
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

        if (this.search && this.hostedDropdown) {
            this.hostedDropdown.updateOpen(true);
        }
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
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

    toggle() {
        if (this.hostedDropdown) {
            this.hostedDropdown.updateOpen(!this.open);
        }
    }

    private isStrictMatch(item: T): boolean {
        return this.strictMatcher(item, this.search || '', this.stringify);
    }

    private close() {
        if (this.hostedDropdown) {
            this.hostedDropdown.updateOpen(false);
        }
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
}
