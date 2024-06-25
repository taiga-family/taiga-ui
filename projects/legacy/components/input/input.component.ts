import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    HostBinding,
    inject,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import type {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiIsNativeFocused} from '@taiga-ui/cdk/utils/focus';
import type {TuiDataListHost} from '@taiga-ui/core/components/data-list';
import {
    tuiAsDataListHost,
    TuiDataListDirective,
} from '@taiga-ui/core/components/data-list';
import {TuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {AbstractTuiControl, tuiAsControl} from '@taiga-ui/legacy/classes';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TUI_TEXTFIELD_SIZE,
    TUI_VALUE_ACCESSOR_PROVIDER,
} from '@taiga-ui/legacy/directives';
import type {TuiFocusableElementAccessor} from '@taiga-ui/legacy/tokens';
import {tuiAsFocusableItemAccessor} from '@taiga-ui/legacy/tokens';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/legacy/utils';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * @deprecated: drop in v5.0
 */
@Component({
    selector: 'tui-input',
    templateUrl: './input.template.html',
    styleUrls: ['./input.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TUI_VALUE_ACCESSOR_PROVIDER,
        tuiAsFocusableItemAccessor(TuiInputComponent),
        tuiAsDataListHost(TuiInputComponent),
        tuiAsControl(TuiInputComponent),
    ],
    viewProviders: [FIXED_DROPDOWN_CONTROLLER_PROVIDER],
})
export class TuiInputComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor, TuiDataListHost<string>
{
    @ViewChild(TuiDropdownOpen)
    private readonly dropdown?: TuiDropdownOpen;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    protected readonly datalist: PolymorpheusContent<TuiContext<TuiActiveZone>>;

    public open = false;

    @HostBinding('attr.data-size')
    public get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    public get focused(): boolean {
        return (
            tuiIsNativeFocused(this.nativeFocusableElement) || !!this.dropdown?.focused
        );
    }

    public handleOption(item: unknown): void {
        this.setNativeValue(String(item));
        this.focusInput();
        this.value = String(item);
        this.open = false;
    }

    public onValueChange(value: string): void {
        this.value = value;
        this.open = true;
    }

    protected get canOpen(): boolean {
        return this.interactive && !!this.datalist;
    }

    protected onActiveZone(active: boolean): void {
        this.updateFocused(active);
    }

    protected getFallbackValue(): string {
        return '';
    }

    private focusInput(preventScroll = false): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.focus({preventScroll});
        }
    }

    private setNativeValue(value: string): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.value = value;
        }
    }
}
