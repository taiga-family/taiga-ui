import {Directive} from '@angular/core';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';

@Directive({selector: 'ng-template[tuiAccordionItemContent]'})
export class TuiAccordionItemContentDirective extends PolymorpheusTemplate<
    Record<string, unknown>
> {}
