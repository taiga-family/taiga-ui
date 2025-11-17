import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ViewEncapsulation,
} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiIconEnd, TuiIcons, tuiIconStart} from '@taiga-ui/core/directives/icons';
import {TUI_RADIO_OPTIONS, TuiRadioComponent} from '@taiga-ui/kit/components/radio';

import {TUI_CHECKBOX_OPTIONS, type TuiCheckboxOptions} from './checkbox.options';

@Component({
    selector: 'input[type="checkbox"][tuiCheckbox]',
    template: '',
    styles: '@import "@taiga-ui/kit/styles/components/checkbox.less";',
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
