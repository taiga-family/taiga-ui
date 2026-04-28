import {Directive, input} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';

@Directive({
    selector: 'tui-opt-group',
    host: {
        'data-tui-version': TUI_VERSION,
        role: 'group',
        '[attr.data-label]': 'label() || ""',
    },
})
export class TuiOptGroup {
    public readonly label = input<string | null>();
}
