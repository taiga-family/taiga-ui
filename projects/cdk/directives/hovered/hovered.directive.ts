import {Directive, inject, Output} from '@angular/core';

import {TuiHoveredService} from './hovered.service';

@Directive({
    selector: '[tuiHoveredChange]',
    providers: [TuiHoveredService],
})
export class TuiHoveredDirective {
    @Output()
    readonly tuiHoveredChange = inject(TuiHoveredService);
}
