import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
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
    TuiActiveZoneDirective,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
} from '@taiga-ui/cdk';
import {
    TUI_TEXTFIELD_CLEANER,
    TuiDataListDirective,
    TuiDataListHost,
    TuiHostedDropdownComponent,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeM,
    TuiSizeS,
    TuiTextfieldCleanerDirective,
    TuiValueContentContext,
} from '@taiga-ui/core';
import {TUI_ARROW_MODE, TuiArrowMode} from '@taiga-ui/kit/components/arrow';
import {TUI_ITEMS_HANDLERS, TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_SELECT_PROVIDERS} from './select.providers';
import {TUI_SELECT_OPTIONS, TuiSelectOptions} from './select-options';

@Component({
    selector: `tui-select`,
    templateUrl: `./select.template.html`,
    styleUrls: [`./select.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_SELECT_PROVIDERS,
})
export class TuiSelectComponent<T>
    extends AbstractTuiNullableControl<T>
    implements TuiFocusableElementAccessor, TuiDataListHost<T>
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @ViewChild(TuiHostedDropdownComponent)
    private readonly hostedDropdown?: TuiHostedDropdownComponent;

    @Input()
    @tuiDefaultProp()
    stringify: TuiItemsHandlers<T>['stringify'] = this.itemsHandlers.stringify;

    @Input()
    @tuiDefaultProp()
    identityMatcher: TuiItemsHandlers<T>['identityMatcher'] =
        this.itemsHandlers.identityMatcher;

    @Input()
    @tuiDefaultProp()
    valueContent: TuiSelectOptions<T>['valueContent'] = this.options.valueContent;

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    readonly datalist: PolymorpheusContent<
        TuiContextWithImplicit<TuiActiveZoneDirective>
    > = ``;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_CLEANER)
        private readonly textfieldCleaner: TuiTextfieldCleanerDirective,
        @Inject(TUI_ARROW_MODE)
        private readonly arrowMode: TuiArrowMode,
        @Inject(TUI_ITEMS_HANDLERS)
        private readonly itemsHandlers: TuiItemsHandlers<T>,
        @Inject(TUI_SELECT_OPTIONS)
        private readonly options: TuiSelectOptions<T>,
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
            isNativeFocused(this.nativeFocusableElement) ||
            (!!this.hostedDropdown && this.hostedDropdown.focused)
        );
    }

    get computedValue(): string {
        return this.value === null ? `` : this.stringify(this.value) || ` `;
    }

    get computedContent(): PolymorpheusContent<TuiValueContentContext<T>> {
        return this.valueContent || this.computedValue;
    }

    onValueChange(value: string): void {
        if (!value) {
            this.updateValue(null);
        }
    }

    onActiveZone(active: boolean): void {
        this.updateFocused(active);
    }

    onHovered(hovered: boolean): void {
        this.updateHovered(hovered);
    }

    onKeyDownDelete(): void {
        if (this.textfieldCleaner.cleaner) {
            this.updateValue(null);
        }
    }

    handleOption(option: T): void {
        this.focusInput();
        this.updateValue(option);
        this.hostedDropdown?.updateOpen(false);
    }

    private focusInput(preventScroll: boolean = false): void {
        if (this.nativeFocusableElement) {
            setNativeFocused(this.nativeFocusableElement, true, preventScroll);
        }
    }
}
