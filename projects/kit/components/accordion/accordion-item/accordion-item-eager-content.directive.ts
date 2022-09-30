import {Directive} from '@angular/core';

@Directive({
    selector: `[tuiAccordionItemContent]:not(ng-template)`,
})
export class TuiAccordionItemEagerContentDirective {}
