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

    /**
     * Asserts the correct type of the context for the template that `TuiLet` will render.
     *
     * The presence of this method is a signal to the Ivy template type-check compiler that the
     * `TuiLet` structural directive renders its template with a specific context type.
     */
    static ngTemplateContextGuard<T>(
        _dir: TuiLetDirective<T>,
        _ctx: any,
    ): _ctx is TuiLetDirective<T> {
        return true;
    }
}
