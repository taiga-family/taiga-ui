import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './floating-container.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-floating-container-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiFloatingContainer]',
    hostDirectives: [TuiAnimated],
    host: {
        'data-tui-version': TUI_VERSION,
        tuiFloatingContainer: '',
        '[style.--t-background]': 'background()',
    },
})
export class TuiFloatingContainer {
    protected readonly nothing = tuiWithStyles(Styles);
    public readonly background = input('', {alias: 'tuiFloatingContainer'});
}
