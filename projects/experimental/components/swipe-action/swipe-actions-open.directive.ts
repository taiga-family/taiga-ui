import {Directive, ElementRef, EventEmitter, Inject, Input, Output} from '@angular/core';

@Directive({
    selector: 'tui-swipe-actions[open]',
})
export class TuiSwipeActionsOpenDirective {
    private open = false;

    @Input('open')
    set setOpen(open: boolean) {
        if (this.open !== open) {
            this.open = open;
            this.toggle(open);
        }
    }

    @Output()
    readonly openChange = new EventEmitter<boolean>();

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    update(open: boolean): void {
        if (this.open !== open) {
            this.open = open;
            this.openChange.emit(open);
        }
    }

    private toggle(open: boolean): void {
        this.elementRef.nativeElement.scrollTo({
            left: open ? this.elementRef.nativeElement.scrollWidth : 0,
            behavior: 'smooth',
        });
    }
}
