import {Directive, ElementRef, inject, OnInit} from '@angular/core';
import {TUI_SCROLLABLE} from '@taiga-ui/core/constants';

@Directive({
    standalone: true,
    selector: '[tuiScrollable]',
})
export class TuiScrollableDirective implements OnInit {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    public ngOnInit(): void {
        this.el.dispatchEvent(
            new CustomEvent(TUI_SCROLLABLE, {
                bubbles: true,
                detail: this.el,
            }),
        );
    }
}
