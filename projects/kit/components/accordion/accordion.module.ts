import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiExpand, TuiGroupDirective, TuiIconComponent} from '@taiga-ui/core';
import {TuiChevronDirective} from '@taiga-ui/kit/directives/chevron';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiAccordionComponent} from './accordion.component';
import {TuiAccordionItemComponent} from './accordion-item/accordion-item.component';
import {TuiAccordionItemContentDirective} from './accordion-item/accordion-item-content.directive';
import {TuiAccordionItemEagerContentDirective} from './accordion-item/accordion-item-eager-content.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiGroupDirective,
        TuiExpand,
        TuiIconComponent,
        TuiChevronDirective,
    ],
    declarations: [
        TuiAccordionComponent,
        TuiAccordionItemComponent,
        TuiAccordionItemContentDirective,
        TuiAccordionItemEagerContentDirective,
    ],
    exports: [
        TuiAccordionComponent,
        TuiAccordionItemComponent,
        TuiAccordionItemContentDirective,
        TuiAccordionItemEagerContentDirective,
    ],
})
export class TuiAccordionModule {}
