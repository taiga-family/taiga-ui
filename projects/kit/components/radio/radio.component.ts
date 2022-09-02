import {AnimationOptions} from '@angular/animations';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiNullableControl,
    TUI_DEFAULT_IDENTITY_MATCHER,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiIdentityMatcher,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {TUI_ANIMATION_OPTIONS, tuiScaleIn, TuiSizeL} from '@taiga-ui/core';
import {TuiRadioGroupComponent} from '@taiga-ui/kit/components/radio-group';

import {TUI_RADIO_OPTIONS, TuiRadioOptions} from './radio-options';

@Component({
    selector: `tui-radio`,
    templateUrl: `./radio.template.html`,
    styleUrls: [`./radio.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiRadioComponent),
        tuiAsControl(TuiRadioComponent),
    ],
    animations: [tuiScaleIn],
})
export class TuiRadioComponent<T>
    extends AbstractTuiNullableControl<T>
    implements TuiFocusableElementAccessor
{
    @ViewChild(`focusableElement`)
    private readonly focusableElement?: ElementRef<TuiNativeFocusableElement>;

    @Input()
    item?: T | null;

    @Input()
    @tuiDefaultProp()
    identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    @tuiDefaultProp()
    name: string | null = null;

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeL = this.options.size;

    @Input()
    @tuiDefaultProp()
    pseudoDisabled = false;

    readonly animation = {value: ``, ...this.animationOptions} as const;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_ANIMATION_OPTIONS)
        private readonly animationOptions: AnimationOptions,
        @Inject(TUI_RADIO_OPTIONS)
        private readonly options: TuiRadioOptions,
        @Optional()
        @Inject(TuiRadioGroupComponent)
        private readonly radioGroup: TuiRadioGroupComponent | null,
    ) {
        super(control, changeDetectorRef);
    }

    get appearance(): string {
        return this.checked
            ? this.options.appearances.checked
            : this.options.appearances.unchecked;
    }

    @HostBinding(`class._disabled`)
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
        return this.name || this.radioGroupName || this.controlName || ``;
    }

    get isFocusable(): boolean {
        return !this.readOnly && this.computedFocusable;
    }

    onChecked(checked: boolean): void {
        if (checked) {
            this.updateValue(this.item !== undefined ? this.item : this.fallbackValue);
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
