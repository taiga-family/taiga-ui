import {Directive, input} from '@angular/core';
import {tuiGetActualTarget, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

@Directive({
    selector: 'tui-swipe-actions[autoClose]',
    host: {
        '(document:pointerdown.zoneless)': 'handleEvent($event)',
        '(document:focusin.zoneless)': 'handleEvent($event)',
    },
})
export class TuiSwipeActionsAutoClose {
    private readonly el = tuiInjectElement();

    public readonly autoClose = input<boolean | string>(true);

    protected handleEvent(event: Event): void {
        if (this.autoClose() !== false && !this.el.contains(tuiGetActualTarget(event))) {
            this.el.scrollTo({left: 0, behavior: 'smooth'});
        }
    }
}
