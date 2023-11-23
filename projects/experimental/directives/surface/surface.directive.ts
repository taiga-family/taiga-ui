import {Directive, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';

import {TuiSurfaceComponent} from './surface.component';

@Directive({
    selector: '[tuiSurface]',
    host: {
        tuiSurface: '',
        '[attr.data-surface]': 'tuiSurface',
    },
})
export class TuiSurfaceDirective {
    @Input()
    tuiSurface = '';

    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiSurfaceComponent);
    }
}
