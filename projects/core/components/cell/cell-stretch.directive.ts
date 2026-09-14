import {Directive} from '@angular/core';

/** TODO: Drop and make this default in v6 */
@Directive({
    selector: '[tuiCell][tuiCellStretch]',
    host: {tuiCellStretch: ''},
})
export class TuiCellStretch {}
