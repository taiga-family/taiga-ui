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
    host: {class: 'tui-status'},
})
class Styles {}

@Directive({
    selector: '[tuiStatus]',
    host: {
        tuiStatus: '',
        'data-tui-version': TUI_VERSION,
        '[style.--t-status]': 'tuiStatus() || null',
    },
})
export class TuiStatus {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly tuiStatus = input('');
}
