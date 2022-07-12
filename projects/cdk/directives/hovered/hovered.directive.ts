import {Directive, Inject} from '@angular/core';
import {Observable} from 'rxjs';

import {TuiHoveredService} from './hovered.service';

@Directive({
    selector: '[tuiHoveredChange]',
    outputs: ['tuiHoveredChange'],
    providers: [TuiHoveredService],
})
export class TuiHoveredDirective {
    constructor(
        @Inject(TuiHoveredService) readonly tuiHoveredChange: Observable<boolean>,
    ) {}
}
