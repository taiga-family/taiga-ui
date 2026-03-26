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
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './row.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-card-row-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiCardRow]',
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiCardRow {
    protected readonly nothing = tuiWithStyles(Styles);
}
