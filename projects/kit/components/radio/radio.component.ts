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
    public item?: T | null;

    @Input()
    public identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    public name: string | null = null;

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeL = this.options.size;

    @Input()
    public pseudoDisabled = false;

    protected get appearance(): string {
        return this.checked
            ? this.options.appearances.checked
            : this.options.appearances.unchecked;
    }

    @HostBinding('class._disabled')
    public override get computedDisabled(): boolean {
        return this.disabled || this.pseudoDisabled;
    }

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return !this.focusableElement || this.computedDisabled
            ? null
            : this.focusableElement.nativeElement;
    }

    public get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    public get checked(): boolean {
        return this.value === null
            ? this.item === null
            : this.item !== undefined &&
                  this.item !== null &&
                  this.identityMatcher(this.value, this.item);
    }

    protected override get computedName(): string {
        return this.name || this.radioGroupName || this.controlName || '';
    }

    protected get isFocusable(): boolean {
        return !this.readOnly && this.computedFocusable;
    }

    protected onChecked(checked: boolean): void {
        if (checked) {
            this.value = this.item !== undefined ? this.item : this.fallbackValue;
        }
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected onFocusVisible(focusVisible: boolean): void {
        this.updateFocusVisible(focusVisible);
    }

    private get radioGroupName(): string | null {
        return this.radioGroup === null ? null : this.radioGroup.name;
    }
}
