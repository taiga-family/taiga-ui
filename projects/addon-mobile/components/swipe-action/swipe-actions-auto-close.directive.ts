import {Directive, ElementRef, inject, Input} from '@angular/core';
import {tuiGetActualTarget} from '@taiga-ui/cdk';

@Directive({
    standalone: true,
    selector: 'tui-swipe-actions[autoClose]',
    host: {
        '(document:pointerdown.silent)': 'handleEvent($event)',
        '(document:focusin.silent)': 'handleEvent($event)',
    },
})
export class TuiSwipeActionsAutoCloseDirective {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    @Input()
    autoClose: boolean | string = true;

    handleEvent(event: Event): void {
        if (this.autoClose !== false && !this.el.contains(tuiGetActualTarget(event))) {
            this.el.scrollTo({
                left: 0,
                behavior: 'smooth',
            });
        }
    }
}
