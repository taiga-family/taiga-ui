import {Directive, ElementRef, Inject, Input} from '@angular/core';
import {tuiGetActualTarget} from '@taiga-ui/cdk';

@Directive({
    selector: 'tui-swipe-actions[autoClose]',
    host: {
        '(document:pointerdown.silent)': 'handleEvent($event)',
        '(document:focusin.silent)': 'handleEvent($event)',
    },
})
export class TuiSwipeActionsAutoCloseDirective {
    @Input()
    autoClose: boolean | string = true;

    constructor(@Inject(ElementRef) private readonly el: ElementRef<HTMLElement>) {}

    handleEvent(event: Event): void {
        const target = tuiGetActualTarget(event);

        if (this.autoClose !== false && !this.el.nativeElement.contains(target)) {
            this.close();
        }
    }

    private close(): void {
        this.el.nativeElement.scrollTo({
            left: 0,
            behavior: 'smooth',
        });
    }
}
