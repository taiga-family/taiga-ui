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
            @import './block-details.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-block-details-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiBlockDetails]',
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiBlockDetails {
    protected readonly nothing = tuiWithStyles(Styles);
}
