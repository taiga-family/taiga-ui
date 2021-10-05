import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiFocusableModule,
    TuiFocusedModule,
    TuiFocusVisibleModule,
    TuiHoveredModule,
} from '@taiga-ui/cdk';
import {TuiExpandModule, TuiGroupModule, TuiSvgModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiAccordionItemContentDirective} from './accordion-item/accordion-item-content.directive';
import {TuiAccordionItemComponent} from './accordion-item/accordion-item.component';
import {TuiAccordionComponent} from './accordion.component';

@NgModule({
    imports: [
        CommonModule,
        TuiFocusedModule,
        TuiFocusVisibleModule,
        TuiFocusableModule,
        TuiHoveredModule,
        PolymorpheusModule,
        TuiSvgModule,
        TuiGroupModule,
        TuiExpandModule,
    ],
    declarations: [
        TuiAccordionComponent,
        TuiAccordionItemComponent,
        TuiAccordionItemContentDirective,
    ],
    exports: [
        TuiAccordionComponent,
        TuiAccordionItemComponent,
        TuiAccordionItemContentDirective,
    ],
})
export class TuiAccordionModule {}
