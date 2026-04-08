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
            @import './button-group.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-button-group-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiButtonGroup]',
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiButtonGroup {
    protected readonly nothing = tuiWithStyles(Styles);
}
