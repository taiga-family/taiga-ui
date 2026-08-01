import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

import {TUI_VERSION} from '@taiga-ui/cdk/constants';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./button-group.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-button-group-styles',
    },
})
class TuiButtonGroupStyles {}

@Directive({
    standalone: true,
    selector: '[tuiButtonGroup]',
    host: {
        tuiButtonGroupV: TUI_VERSION,
    },
})
export class TuiButtonGroup {
    protected readonly nothing = tuiWithStyles(TuiButtonGroupStyles);
}
