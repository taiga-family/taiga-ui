import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {DomSanitizer, type SafeStyle} from '@angular/platform-browser';
import {type MaskitoOptions} from '@maskito/core';
import {
    tuiGetGradientData,
    tuiParseGradient,
    tuiToGradient,
} from '@taiga-ui/cdk/utils/color';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiDropdownOptionsProvider} from '@taiga-ui/core/directives/dropdown';
import {AbstractTuiControl} from '@taiga-ui/legacy/classes';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    type TuiFocusableElementAccessor,
    type TuiNativeFocusableElement,
} from '@taiga-ui/legacy/tokens';

type MaskMode = 'gradient' | 'hex' | 'rgb';

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/input-color TuiInputColor} (from @taiga-ui/kit) instead
 */
@Component({
    standalone: false,
    selector: 'tui-input-color',
    templateUrl: './input-color.template.html',
    styleUrls: ['./input-color.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [tuiDropdownOptionsProvider({maxHeight: 600})],
    host: {
        '(click)': 'onClick()',
    },
})
export class TuiInputColorComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly domSanitizer = inject(DomSanitizer);

    @Input()
    public colors: ReadonlyMap<string, string> = new Map<string, string>();

    public open = false;

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    public get background(): SafeStyle {
        return this.sanitize(this.value, this.domSanitizer);
    }

    public get mode(): MaskMode {
        if (this.value.startsWith('#')) {
            return 'hex';
        }

        return this.value.startsWith('rgb') ? 'rgb' : 'gradient';
    }

    @tuiPure
    public maskitoOptions(mode: MaskMode): MaskitoOptions | null {
        return mode === 'hex' ? {mask: ['#', ...new Array(6).fill(/[0-9a-f]/i)]} : null;
    }

    public onClick(): void {
        this.open = !this.open;
    }

    /** deprecated use 'value' setter */
    public onValueChange(textValue: string): void {
        this.value = textValue;
    }

    public onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected getFallbackValue(): string {
        return '#000000';
    }

    @tuiPure
    private sanitize(value: string, domSanitizer: DomSanitizer): SafeStyle | string {
        return value.startsWith('linear-gradient(')
            ? domSanitizer.bypassSecurityTrustStyle(
                  tuiToGradient(tuiParseGradient(tuiGetGradientData(value))),
              )
            : value;
    }
}
