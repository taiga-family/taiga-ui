import {Directive, inject} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';

@Directive({
    standalone: true,
    selector: '[tuiCell][tuiCellStretch]',
    host: {'[style.border-radius]': 'isMobile ? 0 : null'},
})
export class TuiCellStretch {
    protected readonly isMobile = inject(TUI_IS_MOBILE);
}
