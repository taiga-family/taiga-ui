import {Directive, inject, Output} from '@angular/core';

import {TuiElasticStickyService} from './elastic-sticky.service';

@Directive({
    standalone: true,
    selector: '[tuiElasticSticky]',
    providers: [TuiElasticStickyService],
    exportAs: 'tuiElasticSticky',
})
export class TuiElasticStickyDirective {
    @Output()
    public readonly tuiElasticSticky = inject(TuiElasticStickyService);
}
