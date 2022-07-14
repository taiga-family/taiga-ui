import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFocusableModule, TuiFocusedModule, TuiFocusVisibleModule} from '@taiga-ui/cdk';
import {TuiExpandModule, TuiGroupModule, TuiSvgModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiAccordionComponent} from './accordion.component';
import {TuiAccordionItemComponent} from './accordion-item/accordion-item.component';
import {TuiAccordionItemContentDirective} from './accordion-item/accordion-item-content.directive';
import {TuiAccordionItemEagerContentDirective} from './accordion-item/accordion-item-eager-content.directive';

@NgModule({
    imports: [
        CommonModule,
        TuiFocusedModule,
        TuiFocusVisibleModule,
        TuiFocusableModule,
        PolymorpheusModule,
        TuiSvgModule,
        TuiGroupModule,
        TuiExpandModule,
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
