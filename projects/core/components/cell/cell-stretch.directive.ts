import {Directive} from '@angular/core';

@Directive({
    selector: '[tuiCell][tuiCellStretch]',
    host: {tuiCellStretch: ''},
})
export class TuiCellStretch {}
