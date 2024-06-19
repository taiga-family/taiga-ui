import {Directive} from '@angular/core';

@Directive({
    standalone: true,
    selector: '[tuiAccordionItemContent]:not(ng-template)',
})
export class TuiAccordionItemEagerContent {}
