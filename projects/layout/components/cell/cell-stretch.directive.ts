import {Directive} from '@angular/core';

@Directive({
    standalone: true,
    selector: '[tuiCell][tuiCellStretch]',
    host: {tuiCellStretch: ''},
})
export class TuiCellStretch {}
