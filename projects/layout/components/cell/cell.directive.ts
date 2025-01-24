import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';

import type {TuiCellOptions} from './cell.options';
import {TUI_CELL_OPTIONS} from './cell.options';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./cell.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-cell',
    },
})
class TuiCellStyles {}

@Directive({
    standalone: true,
    selector: '[tuiCell]:not(ng-template)',
    providers: [
        tuiAvatarOptionsProvider({size: 'm'}),
        tuiButtonOptionsProvider({size: 's'}),
    ],
    host: {
        tuiCell: '',
        '[attr.data-size]': 'size || options.size',
        '[attr.data-height]': 'height',
    },
})
export class TuiCell {
    protected readonly options = inject(TUI_CELL_OPTIONS);

    protected readonly nothing = tuiWithStyles(TuiCellStyles);

    @Input('tuiCell')
    public size: TuiCellOptions['size'] | '' = this.options.size;

    @Input('tuiCellHeight')
    public height: TuiCellOptions['height'] = this.options.height;
}
