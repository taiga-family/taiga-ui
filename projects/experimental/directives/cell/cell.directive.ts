import {Directive, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core';
import {tuiAvatarOptionsProvider} from '@taiga-ui/kit';

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
    @Input('tuiCell')
    public size: TuiSizeL | TuiSizeS | '' = 'l';

    protected readonly nothing = tuiWithStyles(TuiCellComponent);
}
