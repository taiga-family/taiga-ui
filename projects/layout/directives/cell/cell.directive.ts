import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit';

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
        tuiAvatarOptionsProvider({size: 's'}),
        tuiButtonOptionsProvider({size: 's'}),
    ],
    host: {
        tuiCell: '',
        '[attr.data-size]': 'size || "l"',
    },
})
export class TuiCellDirective {
    @Input('tuiCell')
    public size: TuiSizeL | TuiSizeS | '' = 'l';

    protected readonly nothing = tuiWithStyles(TuiCellStyles);
}
