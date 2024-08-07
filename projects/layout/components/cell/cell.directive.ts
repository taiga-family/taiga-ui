import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';

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
        '[attr.data-size]': 'size || "l"',
    },
})
export class TuiCell {
    protected readonly nothing = tuiWithStyles(TuiCellStyles);

    @Input('tuiCell')
    public size: TuiSizeL | TuiSizeS | '' = '';
}
