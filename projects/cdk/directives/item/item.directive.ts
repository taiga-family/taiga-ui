import {Directive} from '@angular/core';

/**
 * Blank directive for queries via `@ContentChildren` / `@ViewChildren` / `querySelector`
 */
@Directive({
    standalone: true,
    selector: '[tuiItem]',
})
export class TuiItem {}
