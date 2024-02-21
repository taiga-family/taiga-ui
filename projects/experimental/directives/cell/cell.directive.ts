import {Directive, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {
    tuiAvatarOptionsProvider,
    tuiButtonOptionsProvider,
} from '@taiga-ui/experimental/components';

import {TuiCellComponent} from './cell.component';

@Directive({
    selector: '[tuiCell]',
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
    protected readonly nothing = tuiWithStyles(TuiCellComponent);

    @Input('tuiCell')
    size: TuiSizeL | TuiSizeS | '' = 'l';
}
