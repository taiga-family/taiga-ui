import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiIcons, tuiIconStart} from '@taiga-ui/core/directives/icons';
import {TUI_RADIO_OPTIONS, TuiRadioComponent} from '@taiga-ui/kit/components/radio';

import {TUI_SWITCH_OPTIONS, type TuiSwitchOptions} from './switch.options';

@Component({
    selector: 'input[type="checkbox"][tuiSwitch]',
    template: '',
    styles: '@import "@taiga-ui/kit/styles/components/switch.less";',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TUI_RADIO_OPTIONS, TUI_SWITCH_OPTIONS)],
    hostDirectives: [TuiIcons],
    host: {role: 'switch'},
})
export class TuiSwitch extends TuiRadioComponent<TuiSwitchOptions> {
    protected readonly icon = tuiIconStart(
        computed(() => (this.showIcons() ? this.options.icon(this.size()) : '')),
    );

    public readonly showIcons = input(this.options.showIcons);
}
