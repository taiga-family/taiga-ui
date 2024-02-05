import {Directive, ElementRef, inject, Input} from '@angular/core';
import {tuiGetActualTarget} from '@taiga-ui/cdk';

@Directive({
    standalone: true,
    selector: 'tui-swipe-actions[autoClose]',
    host: {
        '(document:pointerdown.silent)': 'onPointer($event)',
    },
})
export class TuiSwipeActionsAutoCloseDirective {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    @Input()
    autoClose = true;

    onPointer(event: PointerEvent): void {
        if (this.autoClose && !this.el.contains(tuiGetActualTarget(event))) {
            this.el.scrollTo({
                left: 0,
                behavior: 'smooth',
            });
        }
    }
}
