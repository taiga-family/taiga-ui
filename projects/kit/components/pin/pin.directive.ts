import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit/components';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/pin.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-pin-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiPin]',
    providers: [tuiBadgeOptionsProvider({appearance: 'primary', size: 's'})],
    host: {'data-tui-version': TUI_VERSION, tuiPin: '', '[class._open]': 'open()'},
})
export class TuiPin {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly open = input<boolean | ''>('', {alias: 'tuiPin'});
}
