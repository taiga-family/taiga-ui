import {Directive, inject, Input, TemplateRef, ViewContainerRef} from '@angular/core';

import {TuiLetContext} from './let-context';

/**
 * @deprecated use @let instead
 */
@Directive({
    selector: '[tuiLet]',
})
export class TuiLet<T> {
    @Input()
    public tuiLet!: T;

    constructor() {
        inject(ViewContainerRef).createEmbeddedView(
            inject(TemplateRef<TuiLetContext<T>>),
            new TuiLetContext<T>(this),
        );
    }

    /**
     * Asserts the correct type of the context for the template that `TuiLet` will render.
     *
     * The presence of this method is a signal to the Ivy template type-check compiler that the
     * `TuiLet` structural directive renders its template with a specific context type.
     */
    public static ngTemplateContextGuard<T>(
        _dir: TuiLet<T>,
        _ctx: unknown,
    ): _ctx is TuiLetContext<T> {
        return true;
    }
}
