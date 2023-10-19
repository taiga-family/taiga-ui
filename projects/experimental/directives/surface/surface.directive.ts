import {Directive, HostBinding, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';

import {TuiSurfaceComponent} from './surface.component';

@Directive({
    selector: '[tuiSurface]',
})
export class TuiSurfaceDirective {
    @Input()
    @HostBinding('attr.data-surface')
    tuiSurface = '';

    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiSurfaceComponent);
    }
}
