import {Directive, ElementRef, inject, OnInit} from '@angular/core';
import {TUI_SCROLLABLE} from '@taiga-ui/core/constants';

@Directive({
    selector: '[tuiScrollable]',
})
export class TuiScrollableDirective implements OnInit {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    ngOnInit(): void {
        this.el.dispatchEvent(
            new CustomEvent(TUI_SCROLLABLE, {
                bubbles: true,
                detail: this.el,
            }),
        );
    }
}
