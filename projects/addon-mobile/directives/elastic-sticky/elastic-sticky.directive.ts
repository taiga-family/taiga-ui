import {Directive, inject, Output} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';

import {TuiElasticStickyService} from './elastic-sticky.service';

@Directive({
    selector: '[tuiElasticSticky]',
    providers: [TuiElasticStickyService, TuiDestroyService],
    exportAs: 'tuiElasticSticky',
})
export class TuiElasticStickyDirective {
    @Output()
    public readonly tuiElasticSticky = inject(TuiElasticStickyService);
}
