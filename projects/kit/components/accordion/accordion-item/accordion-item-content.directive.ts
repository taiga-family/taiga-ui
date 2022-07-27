import {ChangeDetectorRef, Directive, Inject, Self, TemplateRef} from '@angular/core';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';

@Directive({
    selector: `ng-template[tuiAccordionItemContent]`,
})
export class TuiAccordionItemContentDirective extends PolymorpheusTemplate<
    Record<string, unknown>
> {
    constructor(
        @Inject(TemplateRef)
        @Self()
        templateRef: TemplateRef<Record<string, unknown>>,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        super(templateRef, changeDetectorRef);
    }
}
