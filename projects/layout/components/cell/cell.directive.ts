import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';

import {TUI_CELL_OPTIONS} from './cell.options';

@Component({
    template: '',
    styleUrls: ['./cell.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-cell'},
})
class Styles {}

@Directive({
    selector: '[tuiCell]:not(ng-template)',
    providers: [
        tuiAvatarOptionsProvider({size: 'm'}),
        tuiButtonOptionsProvider({size: 's'}),
    ],
    host: {
        tuiCell: '',
        '[attr.data-size]': 'size() || options.size || "l"',
        '[attr.data-height]': 'height()',
    },
})
export class TuiCell {
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly options = inject(TUI_CELL_OPTIONS);

    public readonly size = input(this.options.size, {alias: 'tuiCell'});
    public readonly height = input(this.options.height, {alias: 'tuiCellHeight'});
}
