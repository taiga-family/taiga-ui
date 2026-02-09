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
            @import '@taiga-ui/styles/components/pin.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-pin'},
})
class Styles {}

@Directive({
    selector: '[tuiPin]',
    host: {
        tuiPin: '',
        'data-tui-version': TUI_VERSION,
        '[class._open]': 'open()',
    },
})
export class TuiPin {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly open = input<boolean | ''>('', {alias: 'tuiPin'});
}
