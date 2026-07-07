import {Directive, inject} from '@angular/core';
import {TUI_FONT_OFFSET} from '@taiga-ui/core/utils/miscellaneous';

// TODO: Refactor Cell to always use grid and apply this by default in v6
@Directive({
    selector: '[tuiCell][tuiCellResponsive]',
    host: {'[class._rearranged]': 'offset() > 10'},
})
export class TuiCellResponsive {
    protected readonly offset = inject(TUI_FONT_OFFSET);
}
