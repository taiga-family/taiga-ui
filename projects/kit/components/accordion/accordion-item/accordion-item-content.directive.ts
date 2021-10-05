import {ChangeDetectorRef, Directive, Inject, Self, TemplateRef} from '@angular/core';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';

// TODO: do not rebuild the template, think about "lazy" flag
@Directive({
    selector: '[tuiAccordionItemContent]',
})
export class TuiAccordionItemContentDirective extends PolymorpheusTemplate<{}> {
    constructor(
        @Inject(TemplateRef)
        @Self()
        templateRef: TemplateRef<{}>,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        super(templateRef, changeDetectorRef);
    }
}
