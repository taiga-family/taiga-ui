import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostListener,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import type {SafeStyle} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {
    tuiGetGradientData,
    tuiParseGradient,
    tuiToGradient,
} from '@taiga-ui/addon-editor/utils';
import type {TuiFocusableElementAccessor, TuiNativeFocusableElement} from '@taiga-ui/cdk';
import {AbstractTuiControl, tuiDefaultProp, tuiPure} from '@taiga-ui/cdk';
import {
    tuiDropdownOptionsProvider,
    TuiHostedDropdownComponent,
    TuiPrimitiveTextfieldComponent,
} from '@taiga-ui/core';

@Component({
    selector: `tui-input-color`,
    templateUrl: `./input-color.template.html`,
    styleUrls: [`./input-color.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [tuiDropdownOptionsProvider({maxHeight: 600})],
})
export class TuiInputColorComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @ViewChild(TuiHostedDropdownComponent)
    private readonly dropdown?: TuiHostedDropdownComponent;

    @Input()
    @tuiDefaultProp()
    colors: ReadonlyMap<string, string> = new Map<string, string>();

    open = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(DomSanitizer) private readonly domSanitizer: DomSanitizer,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    get focused(): boolean {
        return !!this.dropdown && this.dropdown.focused;
    }

    get background(): SafeStyle {
        return this.sanitize(this.value, this.domSanitizer);
    }

    @HostListener(`click`)
    onClick(): void {
        this.open = !this.open;
    }

    onValueChange(textValue: string): void {
        this.updateValue(textValue);
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected getFallbackValue(): string {
        return `#000000`;
    }

    @tuiPure
    private sanitize(value: string, domSanitizer: DomSanitizer): SafeStyle | string {
        return value.startsWith(`linear-gradient(`)
            ? domSanitizer.bypassSecurityTrustStyle(
                  tuiToGradient(tuiParseGradient(tuiGetGradientData(value))),
              )
            : value;
    }
}
