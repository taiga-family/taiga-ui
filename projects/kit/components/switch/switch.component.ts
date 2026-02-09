import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {TUI_RADIO_OPTIONS, TuiRadioComponent} from '@taiga-ui/core/components/radio';
import {TuiIcons, tuiIconStart} from '@taiga-ui/core/directives/icons';

import {TUI_SWITCH_OPTIONS, type TuiSwitchOptions} from './switch.options';

@Component({
    selector: 'input[type="checkbox"][tuiSwitch]',
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/switch.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TUI_RADIO_OPTIONS, TUI_SWITCH_OPTIONS)],
    hostDirectives: [TuiIcons],
    host: {
        switch: '',
        role: 'switch',
        '[class._native]': 'native',
    },
})
export class TuiSwitch extends TuiRadioComponent<TuiSwitchOptions> {
    protected readonly native = 'switch' in this.el;
    protected readonly icon = tuiIconStart(
        computed(() => (this.showIcons() ? this.options.icon(this.size()) : '')),
    );

    public readonly showIcons = input(this.options.showIcons);
}
