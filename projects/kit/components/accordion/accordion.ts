import {TuiAccordionDirective} from './accordion.directive';
import {TuiAccordionItem} from './accordion-item.component';
import {TuiAccordionItemContent} from './accordion-item-content.directive';
import {TuiAccordionItemEagerContent} from './accordion-item-eager-content.directive';

export const TuiAccordion = [
    TuiAccordionItem,
    TuiAccordionDirective,
    TuiAccordionItemContent,
    TuiAccordionItemEagerContent,
] as const;
