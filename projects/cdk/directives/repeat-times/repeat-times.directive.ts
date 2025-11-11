import {
    Directive,
    effect,
    inject,
    input,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';

const MAX_VALUE = 0x10000;

export class TuiRepeatTimesContext implements TuiContext<number> {
    constructor(public readonly $implicit: number) {}
}

/**
 * Directive similar to ngFor but using a number of repetitions rather than an array
 *
 * {@link TuiRepeatTimes.tuiRepeatTimesOf requested number of times}.
 * {@link TuiRepeatTimesContext context} for every instance of the template inherits outer context and stores
 * {@link TuiRepeatTimesContext.$implicit index} of a template instance.
 */
@Directive({
    selector: '[tuiRepeatTimes][tuiRepeatTimesOf]',
})
export class TuiRepeatTimes {
    private readonly vcr = inject(ViewContainerRef);
    private readonly template = inject(TemplateRef<TuiRepeatTimesContext>);

    public readonly tuiRepeatTimesOf = input.required<number>();

    protected readonly setCount = effect(() => {
        const count = this.tuiRepeatTimesOf();

        const safeCount = Math.floor(tuiClamp(count, 0, MAX_VALUE));

        const {length} = this.vcr;

        if (count < length) {
            this.removeContainers(length - count);
        } else {
            this.addContainers(safeCount);
        }
    });

    private addContainers(count: number): void {
        for (let index = this.vcr.length; index < count; index++) {
            this.vcr.createEmbeddedView<TuiRepeatTimesContext>(
                this.template,
                new TuiRepeatTimesContext(index),
            );
        }
    }

    private removeContainers(amount: number): void {
        for (let index = 0; index < amount; index++) {
            this.vcr.remove();
        }
    }
}
