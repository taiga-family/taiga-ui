import {Directive, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';

import {TuiSurfaceComponent} from './surface.component';

@Directive({
    standalone: true,
    selector: '[tuiSurface]',
    host: {
        tuiSurface: '',
        '[attr.data-surface]': 'tuiSurface',
    },
})
export class TuiSurfaceDirective {
    @Input()
    public tuiSurface = '';

    protected readonly nothing = tuiWithStyles(TuiSurfaceComponent);
}
