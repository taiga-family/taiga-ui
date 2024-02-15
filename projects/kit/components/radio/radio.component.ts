import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiNullableControl,
    TUI_DEFAULT_IDENTITY_MATCHER,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiFocusableElementAccessor,
    TuiIdentityMatcher,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core';
import {TuiRadioGroupComponent} from '@taiga-ui/kit/components/radio-group';

import {TUI_RADIO_OPTIONS} from './radio.options';

@Component({
    selector: 'tui-radio',
    templateUrl: './radio.template.html',
    styleUrls: ['./radio.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiRadioComponent),
        tuiAsControl(TuiRadioComponent),
    ],
})
export class TuiRadioComponent<T>
    extends AbstractTuiNullableControl<T>
    implements TuiFocusableElementAccessor
{
    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<TuiNativeFocusableElement>;

    private readonly radioGroup = inject(TuiRadioGroupComponent, {optional: true});
    private readonly options = inject(TUI_RADIO_OPTIONS);

    @Input()
    item?: T | null;

    @Input()
    identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    name: string | null = null;

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeL = this.options.size;

    @Input()
    pseudoDisabled = false;

    get appearance(): string {
        return this.checked
            ? this.options.appearances.checked
            : this.options.appearances.unchecked;
    }

    @HostBinding('class._disabled')
    override get computedDisabled(): boolean {
        return this.disabled || this.pseudoDisabled;
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return !this.focusableElement || this.computedDisabled
            ? null
            : this.focusableElement.nativeElement;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    get checked(): boolean {
        return this.value === null
            ? this.item === null
            : this.item !== undefined &&
                  this.item !== null &&
                  this.identityMatcher(this.value, this.item);
    }

    override get computedName(): string {
        return this.name || this.radioGroupName || this.controlName || '';
    }

    get isFocusable(): boolean {
        return !this.readOnly && this.computedFocusable;
    }

    onChecked(checked: boolean): void {
        if (checked) {
            this.value = this.item !== undefined ? this.item : this.fallbackValue;
        }
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    onFocusVisible(focusVisible: boolean): void {
        this.updateFocusVisible(focusVisible);
    }

    private get radioGroupName(): string | null {
        return this.radioGroup === null ? null : this.radioGroup.name;
    }
}
