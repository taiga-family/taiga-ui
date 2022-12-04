import {
    Directive,
    Inject,
    Input,
    OnDestroy,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import {tuiRequiredSetter} from '@taiga-ui/cdk/decorators';

import {TuiLetContext} from './let-context';

/**
 * Works like *ngIf but does not have a condition — use it to declare
 * the result of pipes calculation (i.e. async pipe)
 */
@Directive({
    selector: `[tuiLet]`,
})
export class TuiLetDirective<T> implements OnDestroy {
    /** @internal */
    static tuiLetUseIfTypeGuard: void;

    /**
     * Assert the correct type of the expression bound to the `TuiLet` input within the template.
     *
     * The presence of this static field is a signal to the Ivy template type check compiler that
     * when the `TuiLet` structural directive renders its template, the type of the expression bound
     * to `TuiLet` should be narrowed in some way. For `TuiLet`, the binding expression itself is used to
     * narrow its type, which allows the strictNullChecks feature of TypeScript to work with `TuiLet`.
     */
    static ngTemplateGuard_tuiLet: 'binding';

    private mutableViewContext: TuiLetContext<T | null> = {$implicit: null, tuiLet: null};
    private hasView = false;

    constructor(
        @Inject(ViewContainerRef) private readonly viewContainer: ViewContainerRef,
        @Inject(TemplateRef) private readonly templateRef: TemplateRef<TuiLetContext<T>>,
    ) {}

    /**
     * Asserts the correct type of the context for the template that `TuiLet` will render.
     *
     * The presence of this method is a signal to the Ivy template type-check compiler that the
     * `TuiLet` structural directive renders its template with a specific context type.
     */
    static ngTemplateContextGuard<T>(
        _dir: TuiLetDirective<T>,
        _ctx: unknown,
    ): _ctx is TuiLetDirective<T> {
        return true;
    }

    @Input()
    @tuiRequiredSetter()
    set tuiLet(value: T) {
        this.mutableViewContext.$implicit = this.mutableViewContext.tuiLet = value;

        if (this.hasView) {
            return;
        }

        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef, this.mutableViewContext);
        this.hasView = true;
    }

    ngOnDestroy(): void {
        this.viewContainer.clear();
    }
}
