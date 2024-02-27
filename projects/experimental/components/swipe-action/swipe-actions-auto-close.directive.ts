import {Directive, ElementRef, inject, Input} from '@angular/core';
import {tuiGetActualTarget} from '@taiga-ui/cdk';

@Directive({
    selector: 'tui-swipe-actions[autoClose]',
    host: {
        '(document:pointerdown.silent)': 'handleEvent($event)',
        '(document:focusin.silent)': 'handleEvent($event)',
    },
})
export class TuiSwipeActionsAutoCloseDirective {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    @Input()
    public autoClose: boolean | string = true;

    protected handleEvent(event: Event): void {
        const target = tuiGetActualTarget(event);

        if (this.autoClose !== false && !this.el.contains(target)) {
            this.close();
        }
    }

    private close(): void {
        this.el.scrollTo({
            left: 0,
            behavior: 'smooth',
        });
    }
}
