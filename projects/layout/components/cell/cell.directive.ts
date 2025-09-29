import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';

import {TUI_CELL_OPTIONS, type TuiCellOptions} from './cell.options';

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
        provideStyles(Styles),
        tuiAvatarOptionsProvider({size: 'm'}),
        tuiButtonOptionsProvider({size: 's'}),
    ],
    hostDirectives: [TuiWithStyles],
    host: {
        tuiCell: '',
        '[attr.data-size]': 'tuiCell() || options.size',
        '[attr.data-height]': 'tuiCellHeight()',
    },
})
export class TuiCell {
    protected readonly options = inject(TUI_CELL_OPTIONS);

    public readonly tuiCell = input<TuiCellOptions['size'] | ''>(this.options.size);
    public readonly tuiCellHeight = input(this.options.height);
}
