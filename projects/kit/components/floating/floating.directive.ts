import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

import {TUI_FLOATING_OPTIONS} from './floating.options';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./floating.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-floating',
    },
})
class TuiFloatingStyles {}

@Directive({
    standalone: true,
    selector: '[tuiFloating]',
    host: {
        tuiFloating: '',
        '[style.--t-background]': 'background',
        '[class._substrate]': 'substrate',
    },
})
export class TuiFloating {
    protected readonly nothing = tuiWithStyles(TuiFloatingStyles);
    protected readonly options = inject(TUI_FLOATING_OPTIONS);

    @Input('tuiFloating')
    public background = '';

    @Input('tuiSubstrate')
    public substrate = this.options.substrate;
}
