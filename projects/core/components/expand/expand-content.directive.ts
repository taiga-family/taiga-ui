import {ChangeDetectorRef, Directive, Inject, Self, TemplateRef} from '@angular/core';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';

// @bad TODO Replace with PolymorpheusContent
@Directive({
    selector: '[tuiExpandContent]',
})
export class TuiExpandContentDirective extends PolymorpheusTemplate<{}> {
    constructor(
        @Inject(TemplateRef)
        @Self()
        templateRef: TemplateRef<{}>,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        super(templateRef, changeDetectorRef);
    }
}
