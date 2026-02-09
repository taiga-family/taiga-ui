import {
    ChangeDetectionStrategy,
    Component,
    computed,
    HostAttributeToken,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {
    maskitoAddOnFocusPlugin,
    maskitoPrefixPostprocessorGenerator,
    maskitoRemoveOnBlurPlugin,
} from '@maskito/kit';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiWithInput} from '@taiga-ui/core/components/input';
import {TuiSlider} from '@taiga-ui/core/components/slider';
import {TuiTextfieldContent} from '@taiga-ui/core/components/textfield';
import {TuiIcons, tuiIconStart} from '@taiga-ui/core/directives/icons';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TUI_INPUT_COLOR_OPTIONS} from './input-color.options';

const REGEX = /[0-9a-f]/i;
const EMPTY = '"data:image/svg+xml;utf8,<svg xmlns=http://www.w3.org/2000/svg></svg>"';

@Component({
    selector: 'input[tuiInputColor]',
    imports: [FormsModule, TuiSlider, TuiTextfieldContent],
    templateUrl: './input-color.template.html',
    styleUrl: './input-color.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsControl(TuiInputColorComponent), tuiFallbackValueProvider('')],
    hostDirectives: [MaskitoDirective, TuiWithInput],
    host: {
        ngSkipHydration: 'true',
        spellcheck: 'false',
        '[disabled]': 'disabled()',
        '[value]': 'value()',
        '[attr.list]': 'null',
        '(input)': 'onChange($event.target.value)',
    },
})
export class TuiInputColorComponent extends TuiControl<string> {
    protected readonly options = inject(TUI_INPUT_COLOR_OPTIONS);
    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly list = inject(new HostAttributeToken('list'), {optional: true});
    protected readonly start = inject(TuiIcons).iconStart() || '';
    protected readonly icon = tuiIconStart(
        computed(() => (this.align() === 'start' ? EMPTY : this.start)),
        {},
    );

    protected readonly maskito = tuiMaskito(
        computed((length = this.format().length * 2) => ({
            mask: ['#', ...Array.from<RegExp>({length}).fill(REGEX)],
            postprocessors: [maskitoPrefixPostprocessorGenerator('#')],
            plugins: [maskitoAddOnFocusPlugin('#'), maskitoRemoveOnBlurPlugin('#')],
            overwriteMode: 'replace',
        })),
    );

    protected readonly filled = computed(() =>
        this.format() === 'hex' ? this.value().length === 7 : this.value().length === 9,
    );

    protected readonly opacity = computed(() =>
        this.filled() && this.format() === 'hexa'
            ? Number.parseInt(this.value().slice(-2), 16)
            : 255,
    );

    public readonly format = input(this.options.format);
    public readonly align = input(this.options.align);

    protected onInput(value: string): void {
        this.onChange(
            this.format() === 'hex' ? value : `${value}${toHex(this.opacity())}`,
        );
    }

    protected onOpacity(opacity: number): void {
        const value = this.filled() ? this.value().slice(0, 7) : '#000000';

        this.onChange(`${value}${toHex(opacity)}`);
    }
}

function toHex(value: number): string {
    return value.toString(16).padStart(2, '0');
}
