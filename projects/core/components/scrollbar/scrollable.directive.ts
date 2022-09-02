import type {OnInit} from '@angular/core';
import {Directive, ElementRef, Inject} from '@angular/core';
import {TUI_SCROLLABLE} from '@taiga-ui/core/constants';

@Directive({
    selector: `[tuiScrollable]`,
})
export class TuiScrollableDirective implements OnInit {
    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    ngOnInit(): void {
        this.elementRef.nativeElement.dispatchEvent(
            new CustomEvent(TUI_SCROLLABLE, {
                bubbles: true,
                detail: this.elementRef.nativeElement,
            }),
        );
    }
}
