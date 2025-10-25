import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';

import {TuiHoveredService} from './hovered.service';

@Directive({
    standalone: true,
    selector: '[tuiHoveredChange]',
    providers: [TuiHoveredService],
})
export class TuiHovered {
    public readonly tuiHoveredChange = outputFromObservable(inject(TuiHoveredService));
}
