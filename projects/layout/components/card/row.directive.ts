import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styleUrl: './row.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-card-row-${TUI_VERSION}`,
})
class Styles {}

@Directive({selector: '[tuiCardRow]'})
export class TuiCardRow {
    protected readonly nothing = tuiWithStyles(Styles);
}
