import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {TuiExpand} from '@taiga-ui/experimental/components/expand';

import {TuiAccordionComponent} from './accordion.component';
import {TuiAccordionDirective} from './accordion.directive';

export const TuiAccordion = [
    TuiAccordionComponent,
    TuiAccordionDirective,
    TuiExpand,
    TuiItem,
] as const;
