import {Directive, Inject, Output} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';

import {TuiElasticStickyService} from './elastic-sticky.service';

@Directive({
    selector: '[tuiElasticSticky]',
    providers: [TuiElasticStickyService, TuiDestroyService],
    exportAs: 'tuiElasticSticky',
})
export class TuiElasticStickyDirective {
    @Output()
    readonly tuiElasticSticky: Observable<number>;

    constructor(
        @Inject(TuiElasticStickyService) elasticStickyService: TuiElasticStickyService,
    ) {
        this.tuiElasticSticky = elasticStickyService;
    }
}
