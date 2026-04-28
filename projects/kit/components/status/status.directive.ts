import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/status.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-status-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiStatus]',
    host: {
        'data-tui-version': TUI_VERSION,
        tuiStatus: '',
        '[style.--t-status]': 'tuiStatus() || null',
    },
})
export class TuiStatus {
    protected readonly nothing = tuiWithStyles(Styles);
    public readonly tuiStatus = input('');
}
