import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_FONT_OFFSET} from '@taiga-ui/core/utils/miscellaneous';

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
    host: {'data-tui-version': TUI_VERSION, '[class._stack]': 'offset() > 10'},
})
export class TuiButtonGroup {
    protected readonly offset = inject(TUI_FONT_OFFSET);
    protected readonly nothing = tuiWithStyles(Styles);
}
