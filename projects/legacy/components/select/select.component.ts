import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    inject,
    Input,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {type TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiIsFocused} from '@taiga-ui/cdk/utils/focus';
import {
    tuiAsDataListHost,
    tuiAsOptionContent,
    TuiDataListDirective,
    type TuiDataListHost,
} from '@taiga-ui/core/components/data-list';
import {TuiDropdownFixed, TuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
import {
    type TuiSizeL,
    type TuiSizeM,
    type TuiSizeS,
    type TuiValueContentContext,
} from '@taiga-ui/core/types';
import {TUI_ITEMS_HANDLERS, type TuiItemsHandlers} from '@taiga-ui/kit/tokens';
import {
    AbstractTuiNativeSelect,
    AbstractTuiNullableControl,
    tuiAsControl,
} from '@taiga-ui/legacy/classes';
import {TUI_ARROW_MODE} from '@taiga-ui/legacy/components/arrow';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/legacy/components/primitive-textfield';
import {TUI_SELECT_OPTION} from '@taiga-ui/legacy/components/select-option';
import {TUI_TEXTFIELD_CLEANER, TUI_TEXTFIELD_SIZE} from '@taiga-ui/legacy/directives';
import {
    tuiAsFocusableItemAccessor,
    type TuiFocusableElementAccessor,
} from '@taiga-ui/legacy/tokens';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TUI_SELECT_OPTIONS, type TuiSelectOptions} from './select.options';

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/select TuiSelect} (from @taiga-ui/kit) instead
 */
@Component({
    standalone: false,
    selector: 'tui-select',
    templateUrl: './select.template.html',
    styleUrl: './select.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiSelectComponent),
        tuiAsControl(TuiSelectComponent),
        tuiAsDataListHost(TuiSelectComponent),
        tuiAsOptionContent(TUI_SELECT_OPTION),
    ],
    hostDirectives: [TuiDropdownFixed],
    host: {
        '[attr.data-size]': 'size',
    },
})
export class TuiSelectComponent<T>
    extends AbstractTuiNullableControl<T>
    implements TuiFocusableElementAccessor, TuiDataListHost<T>
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @ViewChild(TuiDropdownOpen)
    private readonly dropdown?: TuiDropdownOpen;

    @ContentChild(AbstractTuiNativeSelect, {static: true})
    private readonly nativeSelect?: AbstractTuiNativeSelect;

    private readonly itemsHandlers = inject<TuiItemsHandlers<T>>(TUI_ITEMS_HANDLERS);
    private readonly textfieldCleaner = inject(TUI_TEXTFIELD_CLEANER);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    private readonly arrowMode = inject(TUI_ARROW_MODE);
    private readonly options = inject(TUI_SELECT_OPTIONS);

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    protected readonly datalist: PolymorpheusContent<TuiContext<TuiActiveZone>>;

    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected open = false;

    @Input()
    public stringify: TuiItemsHandlers<T>['stringify'] = this.itemsHandlers.stringify;

    @Input()
    public identityMatcher: TuiItemsHandlers<T>['identityMatcher'] =
        this.itemsHandlers.identityMatcher;

    @Input()
    public valueContent: TuiSelectOptions<T>['valueContent'] = this.options.valueContent;

    public get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement ?? null;
    }

    public get focused(): boolean {
        return (
            tuiIsFocused(this.nativeFocusableElement) ||
            !!this.dropdown?.tuiDropdownOpen()
        );
    }

    public get computedValue(): string {
        return this.value === null ? '' : this.stringify(this.value) || ' ';
    }

    public onValueChange(value: T): void {
        this.value = value || null;
    }

    public handleOption(option: T): void {
        this.focusInput();
        this.value = option;
        this.open = false;
    }

    protected get arrow(): PolymorpheusContent<
        TuiContext<TuiSizeL | TuiSizeM | TuiSizeS>
    > {
        return !this.interactive ? this.arrowMode.disabled : this.arrowMode.interactive;
    }

    protected get nativeDropdownMode(): boolean {
        return !!this.nativeSelect && this.isMobile;
    }

    protected get computedContent(): PolymorpheusContent<TuiValueContentContext<T>> {
        return this.valueContent || this.computedValue;
    }

    protected onActiveZone(active: boolean): void {
        this.updateFocused(active);
    }

    protected onKeyDownDelete(): void {
        if (this.textfieldCleaner.cleaner) {
            this.value = null;
        }
    }

    private focusInput(preventScroll = false): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.focus({preventScroll});
        }
    }
}
