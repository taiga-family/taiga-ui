import {Directive, Inject} from '@angular/core';

import {TuiHoveredService} from './hovered.service';

@Directive({
    selector: `[tuiHoveredChange]`,
    outputs: [`tuiHoveredChange`],
    providers: [TuiHoveredService],
})
export class TuiHoveredDirective {
    constructor(
        @Inject(TuiHoveredService) readonly tuiHoveredChange: TuiHoveredService,
    ) {}
}
