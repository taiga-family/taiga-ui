import {Directive} from '@angular/core';
import {PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

@Directive({
    selector: 'ng-template[tuiAccordionItemContent]',
})
export class TuiAccordionItemContent extends PolymorpheusTemplate<
    Record<string, unknown>
> {}
