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
            @import './collapsed.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-card-collapsed-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiCardCollapsed]',
    host: {
        tuiCardCollapsed: '',
        'data-tui-version': TUI_VERSION,
        '[style.margin-block-end.rem]': 'collapsed() ? 0.75 : 0',
        '[style.clip-path]': 'collapsed() ? "inset(-0.75rem)" : "inset(0)"',
    },
})
export class TuiCardCollapsed {
    protected readonly nothing = tuiWithStyles(Styles);

    public readonly collapsed = input(false, {alias: 'tuiCardCollapsed'});
}
