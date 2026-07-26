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
            @import './surface.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-surface-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiSurface]',
    host: {'data-tui-version': TUI_VERSION, tuiSurface: ''},
})
export class TuiSurface {
    protected readonly nothing = tuiWithStyles(Styles);
}
