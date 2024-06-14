import {NgIf} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiExpand, TuiIcon} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit/directives';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiAccordionDirective} from './accordion.directive';
import {TuiAccordionItem} from './accordion-item.component';
import {TuiAccordionItemContent} from './accordion-item-content.directive';
import {TuiAccordionItemEagerContent} from './accordion-item-eager-content.directive';

@NgModule({
    imports: [NgIf, TuiIcon, TuiChevron, TuiExpand, PolymorpheusOutlet],
    declarations: [
        TuiAccordionDirective,
        TuiAccordionItem,
        TuiAccordionItemContent,
        TuiAccordionItemEagerContent,
    ],
    exports: [
        TuiAccordionDirective,
        TuiAccordionItem,
        TuiAccordionItemContent,
        TuiAccordionItemEagerContent,
    ],
})
export class TuiAccordion {}
