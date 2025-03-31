import {Directive, effect, Input, signal} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

@Directive({
    standalone: true,
    selector: '[tuiElastic]',
    host: {
        '[style.overflow]': '"hidden"',
    },
})
export class TuiElastic {
    protected readonly el = tuiInjectElement();

    // TODO: use mutation observer
    protected readonly trigger = signal<unknown>(null);

    protected outerId = 0;
    protected innerId = 0;

    constructor() {
        effect((onCleanup) => {
            this.trigger();

            const previous = this.el.clientHeight;

            this.el.style.height = 'auto';

            this.outerId = requestAnimationFrame(() => {
                const current = this.el.clientHeight;

                this.el.style.height = `${previous}px`;

                this.innerId = requestAnimationFrame(() => {
                    this.el.style.height = `${current}px`;
                });
            });

            onCleanup(() => {
                cancelAnimationFrame(this.outerId);
                cancelAnimationFrame(this.innerId);
            });
        });
    }

    @Input('tuiElastic')
    public set tuiElastic(trigger: unknown) {
        this.trigger.set(trigger);
    }
}
