import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiExpand, TuiGroupDirective, TuiSvgComponent} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiAccordionComponent} from './accordion.component';
import {TuiAccordionItemComponent} from './accordion-item/accordion-item.component';
import {TuiAccordionItemContentDirective} from './accordion-item/accordion-item-content.directive';
import {TuiAccordionItemEagerContentDirective} from './accordion-item/accordion-item-eager-content.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiSvgComponent,
        TuiGroupDirective,
        TuiExpand,
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
