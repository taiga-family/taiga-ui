import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Input,
    signal,
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
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiTextfieldContent, TuiWithTextfield} from '@taiga-ui/core/components/textfield';
import {TuiIcons} from '@taiga-ui/core/directives/icons';
import {type TuiHorizontalDirection} from '@taiga-ui/core/types';
import {TuiSlider, tuiSliderOptionsProvider} from '@taiga-ui/kit/components/slider';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TUI_INPUT_COLOR_OPTIONS, type TuiInputColorOptions} from './input-color.options';

const REGEX = /[0-9a-fA-F]/;

@Component({
    standalone: true,
    selector: 'input[tuiInputColor]',
    imports: [FormsModule, NgIf, TuiSlider, TuiTextfieldContent],
    templateUrl: './input-color.template.html',
    styleUrls: ['./input-color.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsControl(TuiInputColor),
        tuiFallbackValueProvider(''),
        tuiSliderOptionsProvider({trackColor: 'transparent'}),
    ],
    hostDirectives: [MaskitoDirective, TuiWithTextfield],
    host: {
        ngSkipHydration: 'true',
        inputmode: 'numeric',
        spellcheck: 'false',
        '[disabled]': 'disabled()',
        '[value]': 'value()',
        '[attr.list]': 'null',
        '(input)': 'onChange($event.target.value)',
    },
})
export class TuiInputColor extends TuiControl<string> {
    protected readonly options = inject(TUI_INPUT_COLOR_OPTIONS);
    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly list = this.el.getAttribute('list');
    protected readonly format = signal(this.options.format);
    protected readonly align = signal<TuiHorizontalDirection>(this.options.align);

    protected readonly icon = tuiDirectiveBinding(
        TuiIcons,
        'iconStart',
        computed(() =>
            this.align() === 'left'
                ? '"data:image/svg+xml;utf8,<svg xmlns=http://www.w3.org/2000/svg></svg>"'
                : '',
        ),
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

    @Input('align')
    public set alignSetter(align: TuiInputColorOptions['align']) {
        this.align.set(align);
    }

    @Input('format')
    public set formatSetter(mode: TuiInputColorOptions['format']) {
        this.format.set(mode);
    }

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
