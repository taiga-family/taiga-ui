import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';

import {TUI_CELL_OPTIONS} from './cell.options';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './cell.styles.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-cell-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiCell]:not(ng-template)',
    providers: [tuiButtonOptionsProvider({size: 's'})],
    host: {
        'data-tui-version': TUI_VERSION,
        tuiCell: '',
        '[attr.data-height]': 'height()',
        '[attr.data-size]': 'size() || options.size || "l"',
    },
})
export class TuiCell {
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly options = inject(TUI_CELL_OPTIONS);
    public readonly size = input(this.options.size, {alias: 'tuiCell'});
    public readonly height = input(this.options.height, {alias: 'tuiCellHeight'});
}
