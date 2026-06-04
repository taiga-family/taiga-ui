import {computed, Directive, HostAttributeToken, inject, input} from '@angular/core';
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
import {
    tuiAsTextfieldContent,
    TuiTextfieldContent,
} from '@taiga-ui/core/components/textfield';
import {TuiIcons, tuiIconStart} from '@taiga-ui/core/directives/icons';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TUI_INPUT_COLOR_OPTIONS} from './input-color.options';
import {TuiInputColorContent} from './input-color-content.component';

const REGEX = /[0-9a-f]/i;
const EMPTY = '"data:image/svg+xml;utf8,<svg xmlns=http://www.w3.org/2000/svg></svg>"';

@Directive({
    selector: 'input[tuiInputColor]',
    providers: [
        tuiAsControl(TuiInputColorComponent),
        tuiFallbackValueProvider(''),
        tuiAsTextfieldContent(TuiInputColorContent),
    ],
    hostDirectives: [MaskitoDirective, TuiWithInput, TuiTextfieldContent],
    host: {
        spellcheck: 'false',
        '[attr.list]': 'null',
        '[disabled]': 'disabled()',
        '[value]': 'value()',
        '(input)': 'onChange($event.target.value)',
    },
})
// TODO(v6): rename to TuiInputColorDirective
export class TuiInputColorComponent extends TuiControl<string> {
    protected readonly options = inject(TUI_INPUT_COLOR_OPTIONS);

    public readonly el = tuiInjectElement<HTMLInputElement>();
    public readonly list = inject(new HostAttributeToken('list'), {optional: true});

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

    public readonly format = input(this.options.format);
    public readonly align = input(this.options.align);
}
