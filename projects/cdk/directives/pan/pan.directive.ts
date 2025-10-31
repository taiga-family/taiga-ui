import {Directive, inject, Output} from '@angular/core';

import {TuiPanService} from './pan.service';

@Directive({
    selector: '[tuiPan]',
    providers: [TuiPanService],
})
export class TuiPan {
    @Output()
    public readonly tuiPan = inject(TuiPanService);
}
