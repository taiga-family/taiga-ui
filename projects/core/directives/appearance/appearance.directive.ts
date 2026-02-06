import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiTransitioned} from '@taiga-ui/cdk/directives/transitioned';
import {tuiIsString, tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiInteractiveState} from '@taiga-ui/core/types';

import {TUI_APPEARANCE_OPTIONS} from './appearance.options';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/appearance.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-appearance'},
})
class Styles {}

@Directive({
    selector: '[tuiAppearance]',
    hostDirectives: [TuiTransitioned],
    host: {
        tuiAppearance: '',
        'data-tui-version': TUI_VERSION,
        '[attr.data-appearance]': 'tuiAppearance()',
        '[attr.data-state]': 'tuiAppearanceState()',
        '[attr.data-focus]': 'tuiAppearanceFocus()',
        '[attr.data-mode]': 'modes()',
    },
})
export class TuiAppearance {
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly modes = computed((mode = this.tuiAppearanceMode()) =>
        !mode || tuiIsString(mode) ? mode : mode.join(' '),
    );

    public readonly tuiAppearance = input(inject(TUI_APPEARANCE_OPTIONS).appearance);
    public readonly tuiAppearanceState = input<TuiInteractiveState | null>(null);
    public readonly tuiAppearanceFocus = input<boolean | null>(null);
    public readonly tuiAppearanceMode = input<string | readonly string[] | null>(null);
}
