import {Directive, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

import {TuiTitleComponent} from './title.component';

@Directive({
    standalone: true,
    selector: '[tuiTitle]',
    host: {
        tuiTitle: '',
        '[attr.data-size]': 'size || null',
    },
})
export class TuiTitleDirective {
    @Input('tuiTitle')
    public size: TuiSizeL | TuiSizeS | '' = '';

    protected readonly nothing = tuiWithStyles(TuiTitleComponent);
}
