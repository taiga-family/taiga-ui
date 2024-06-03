import {NgModule} from '@angular/core';

import {TuiAccordionDirective} from './accordion.directive';
import {TuiAccordionItemComponent} from './accordion-item.component';
import {TuiAccordionItemContentDirective} from './accordion-item-content.directive';
import {TuiAccordionItemEagerContentDirective} from './accordion-item-eager-content.directive';

@NgModule({
    imports: [
        TuiAccordionDirective,
        TuiAccordionItemComponent,
        TuiAccordionItemContentDirective,
        TuiAccordionItemEagerContentDirective,
    ],
    exports: [
        TuiAccordionDirective,
        TuiAccordionItemComponent,
        TuiAccordionItemContentDirective,
        TuiAccordionItemEagerContentDirective,
    ],
})
export class TuiAccordion {}
