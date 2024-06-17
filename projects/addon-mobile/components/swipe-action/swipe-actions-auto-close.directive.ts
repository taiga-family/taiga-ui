import {Directive, Input} from '@angular/core';
import {tuiGetActualTarget, tuiInjectElement} from '@taiga-ui/cdk';

@Directive({
    standalone: true,
    selector: 'tui-swipe-actions[autoClose]',
    host: {
        '(document:pointerdown.silent)': 'handleEvent($event)',
        '(document:focusin.silent)': 'handleEvent($event)',
    },
})
export class TuiSwipeActionsAutoClose {
    private readonly el = tuiInjectElement();

    @Input()
    public autoClose: boolean | string = true;

    protected handleEvent(event: Event): void {
        if (this.autoClose !== false && !this.el.contains(tuiGetActualTarget(event))) {
            this.el.scrollTo({
                left: 0,
                behavior: 'smooth',
            });
        }
    }
}
