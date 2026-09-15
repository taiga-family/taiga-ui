import {Directive} from '@angular/core';

/** TODO: Drop and make this default in v5 */
@Directive({
    standalone: true,
    selector: '[tuiCell][tuiCellStretch]',
    host: {tuiCellStretch: ''},
})
export class TuiCellStretch {}
