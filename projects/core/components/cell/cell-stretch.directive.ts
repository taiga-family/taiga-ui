import {Directive, inject} from '@angular/core';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';

@Directive({
    selector: '[tuiCell][tuiCellStretch]',
    host: {'[style.border-radius]': 'isMobile ? 0 : null'},
})
export class TuiCellStretch {
    protected readonly isMobile = inject(WA_IS_MOBILE);
}
