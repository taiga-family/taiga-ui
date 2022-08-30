import {Directive, Inject, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {tuiRequiredSetter} from '@taiga-ui/cdk/decorators';
import {TuiContextWithImplicit} from '@taiga-ui/cdk/interfaces';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';

const MAX_VALUE = 0x10000;

export class TuiRepeatTimesContext implements TuiContextWithImplicit<number> {
    constructor(readonly $implicit: number) {}
}

/**
 * Directive similar to ngFor but using a number of repetitions rather than an array
 *
 * {@link TuiRepeatTimesDirective.tuiRepeatTimesOf requested number of times}.
 * {@link TuiRepeatTimesContext context} for every instance of the template inherits outer context and stores
 * {@link TuiRepeatTimesContext.$implicit index} of a template instance.
 */
@Directive({
    selector: `[tuiRepeatTimes][tuiRepeatTimesOf]`,
})
export class TuiRepeatTimesDirective {
    @Input()
    @tuiRequiredSetter()
    set tuiRepeatTimesOf(count: number) {
        const safeCount = Math.floor(tuiClamp(count, 0, MAX_VALUE));

        const {length} = this.viewContainer;

        if (count < length) {
            this.removeContainers(length - count);
        } else {
            this.addContainers(safeCount);
        }
    }

    constructor(
        @Inject(ViewContainerRef)
        private readonly viewContainer: ViewContainerRef,
        @Inject(TemplateRef)
        private readonly templateRef: TemplateRef<TuiRepeatTimesContext>,
    ) {}

    private addContainers(count: number): void {
        for (let index = this.viewContainer.length; index < count; index++) {
            this.viewContainer.createEmbeddedView<TuiRepeatTimesContext>(
                this.templateRef,
                new TuiRepeatTimesContext(index),
            );
        }
    }

    private removeContainers(amount: number): void {
        for (let index = 0; index < amount; index++) {
            this.viewContainer.remove();
        }
    }
}
