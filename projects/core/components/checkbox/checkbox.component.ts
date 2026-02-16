import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {TUI_RADIO_OPTIONS, TuiRadioComponent} from '@taiga-ui/core/components/radio';
import {tuiIconEnd, TuiIcons, tuiIconStart} from '@taiga-ui/core/directives/icons';

import {TUI_CHECKBOX_OPTIONS, type TuiCheckboxOptions} from './checkbox.options';

@Component({
    selector: 'input[type="checkbox"][tuiCheckbox]',
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/checkbox.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TUI_RADIO_OPTIONS, TUI_CHECKBOX_OPTIONS)],
    hostDirectives: [TuiIcons],
})
export class TuiCheckbox extends TuiRadioComponent<TuiCheckboxOptions> {
    protected readonly check = tuiIconStart(
        computed(() => this.options.icons.checked(this.size())),
    );

    protected readonly indeterminate = tuiIconEnd(
        computed(() => this.options.icons.indeterminate(this.size())),
    );
}
