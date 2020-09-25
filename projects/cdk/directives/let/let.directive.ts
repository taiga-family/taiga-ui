import {Directive, Inject, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {TuiLetContext} from './let-context';

/**
 * Works like *ngIf but does not have a condition — use it to declare
 * the result of pipes calculation (i.e. async pipe)
 */
@Directive({
    selector: '[tuiLet]',
})
export class TuiLetDirective<T> {
    @Input()
    tuiLet!: T;

    constructor(
        @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
        @Inject(TemplateRef) templateRef: TemplateRef<TuiLetContext<T>>,
    ) {
        viewContainer.createEmbeddedView(templateRef, new TuiLetContext<T>(this));
    }
}
