import {Directive, ElementRef, Inject, Input} from '@angular/core';
import {tuiGetActualTarget} from '@taiga-ui/cdk';

@Directive({
    selector: 'tui-swipe-actions[autoClose]',
    host: {
        '(document:pointerdown.silent)': 'onPointer($event)',
    },
})
export class TuiSwipeActionsAutoCloseDirective {
    @Input()
    autoClose = true;

    constructor(@Inject(ElementRef) private readonly el: ElementRef<HTMLElement>) {}

    onPointer(event: PointerEvent): void {
        const target = tuiGetActualTarget(event);

        if (this.autoClose && !this.el.nativeElement.contains(target)) {
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
