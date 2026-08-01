import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./row.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-card-row',
    },
})
class TuiCardRowStyles {}

@Directive({
    standalone: true,
    selector: '[tuiCardRow]',
    host: {
        tuiCardRow: '',
        tuiCardRowV: TUI_VERSION,
    },
})
export class TuiCardRow {
    protected readonly nothing = tuiWithStyles(TuiCardRowStyles);
}
