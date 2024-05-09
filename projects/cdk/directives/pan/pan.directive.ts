import {Directive, inject, Output} from '@angular/core';

import {TuiPanService} from './pan.service';

@Directive({
    standalone: true,
    selector: '[tuiPan]',
    providers: [TuiPanService],
})
export class TuiPanDirective {
    @Output()
    public readonly tuiPan = inject(TuiPanService);
}
