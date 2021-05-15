import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    forwardRef,
    Inject,
    Input,
    Optional,
    Self,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiNullableControl,
    isNativeFocused,
    setNativeFocused,
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiIdentityMatcher,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    TUI_DATA_LIST_HOST,
    TUI_OPTION_CONTENT,
    TUI_TEXTFIELD_CLEANER,
    TuiDataListDirective,
    TuiDataListHost,
    TuiHostedDropdownComponent,
    TuiPrimitiveTextfieldComponent,
    TuiTextfieldCleanerDirective,
    TuiValueContentContext,
} from '@taiga-ui/core';
import {TUI_ARROW} from '@taiga-ui/kit/components/arrow';
import {TUI_SELECT_OPTION} from '@taiga-ui/kit/components/select-option';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

// TODO: remove in ivy compilation
export const SELECT_OPTION: unknown = TUI_SELECT_OPTION;

@Component({
    selector: 'tui-select',
    templateUrl: './select.template.html',
    styleUrls: ['./select.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiSelectComponent),
        },
        {
            provide: TUI_DATA_LIST_HOST,
            useExisting: forwardRef(() => TuiSelectComponent),
        },
        {
            provide: TUI_OPTION_CONTENT,
            useValue: SELECT_OPTION,
        },
        FIXED_DROPDOWN_CONTROLLER_PROVIDER,
    ],
})
export class TuiSelectComponent<T>
    extends AbstractTuiNullableControl<T>
    implements TuiFocusableElementAccessor, TuiDataListHost<T> {
    @Input()
    @tuiDefaultProp()
    identityMatcher: TuiIdentityMatcher<T | string> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    @tuiDefaultProp()
    valueContent: PolymorpheusContent<TuiValueContentContext<T>> = '';

    readonly arrow: PolymorpheusContent = TUI_ARROW;

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    readonly datalist: PolymorpheusContent = '';

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @ViewChild(TuiHostedDropdownComponent)
    private readonly hostedDropdown?: TuiHostedDropdownComponent;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_CLEANER)
        private readonly textfieldCleaner: TuiTextfieldCleanerDirective,
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

    get computedValue(): string {
        return this.value === null ? '' : String(this.value) || ' ';
    }

    get computedContent(): PolymorpheusContent<TuiValueContentContext<T>> {
        return this.valueContent || this.computedValue;
    }

    get canOpen(): boolean {
        return !this.computedDisabled && !this.readOnly;
    }

    onValueChange(value: string) {
        if (!value) {
            this.updateValue(null);
        }
    }

    onActiveZone(active: boolean) {
        this.updateFocused(active);
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onKeyDownDelete() {
        if (this.textfieldCleaner.cleaner) {
            this.updateValue(null);
        }
    }

    handleOption(option: T) {
        this.focusInput();
        this.updateValue(option);

        if (this.hostedDropdown) {
            this.hostedDropdown.updateOpen(false);
        }
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

    private focusInput(preventScroll: boolean = false) {
        if (this.nativeFocusableElement) {
            setNativeFocused(this.nativeFocusableElement, true, preventScroll);
        }
    }
}
