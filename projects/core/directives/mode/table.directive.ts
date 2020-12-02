import {Directive} from '@angular/core';

@Directive({
    // TODO: remove tuiMode and move in a separate module before v2.0
    selector: '[tuiTable], [tuiMode="table"]',
})
export class TuiTableDirective {}
