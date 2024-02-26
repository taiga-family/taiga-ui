import {Directive, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';

import {TuiSurfaceComponent} from './surface.component';

@Directive({
    selector: '[tuiSurface]',
    host: {
        tuiSurface: '',
        '[attr.data-surface]': 'tuiSurface',
    },
})
export class TuiSurfaceDirective {
    protected readonly nothing = tuiWithStyles(TuiSurfaceComponent);

    @Input()
    public tuiSurface = '';
}
