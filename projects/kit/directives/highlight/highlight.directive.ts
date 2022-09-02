import {DOCUMENT} from '@angular/common';
import type {OnChanges} from '@angular/core';
import {Directive, ElementRef, Inject, Input, Renderer2} from '@angular/core';
import {
    svgNodeFilter,
    tuiDefaultProp,
    TuiDestroyService,
    tuiPx,
    TuiResizeService,
} from '@taiga-ui/cdk';

@Directive({
    selector: `[tuiHighlight]`,
    host: {
        '[style.position]': `"relative"`,
        '[style.zIndex]': `0`,
    },
    providers: [TuiDestroyService, TuiResizeService],
})
export class TuiHighlightDirective implements OnChanges {
    private readonly highlight: HTMLElement = this.setUpHighlight();

    private readonly treeWalker = this.documentRef.createTreeWalker(
        this.elementRef.nativeElement,
        NodeFilter.SHOW_TEXT,
        svgNodeFilter,
    );

    @Input()
    @tuiDefaultProp()
    tuiHighlight = ``;

    @Input()
    tuiHighlightColor = `var(--tui-selection)`;

    constructor(
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(TuiResizeService) resize$: TuiResizeService,
    ) {
        resize$.subscribe(() => {
            this.updateStyles();
        });
    }

    get match(): boolean {
        return this.indexOf(this.elementRef.nativeElement.textContent) !== -1;
    }

    ngOnChanges(): void {
        this.updateStyles();
    }

    private updateStyles(): void {
        this.highlight.style.display = `none`;

        if (!this.match) {
            return;
        }

        this.treeWalker.currentNode = this.elementRef.nativeElement;

        do {
            const index = this.indexOf(this.treeWalker.currentNode.nodeValue);

            if (index === -1) {
                continue;
            }

            const range = this.documentRef.createRange();

            range.setStart(this.treeWalker.currentNode, index);
            range.setEnd(this.treeWalker.currentNode, index + this.tuiHighlight.length);

            const hostRect = this.elementRef.nativeElement.getBoundingClientRect();
            const {left, top, width, height} = range.getBoundingClientRect();
            const {style} = this.highlight;

            style.background = this.tuiHighlightColor;
            style.left = tuiPx(left - hostRect.left);
            style.top = tuiPx(top - hostRect.top);
            style.width = tuiPx(width);
            style.height = tuiPx(height);
            style.display = `block`;

            return;
        } while (this.treeWalker.nextNode());
    }

    private indexOf(source: string | null): number {
        return !source || !this.tuiHighlight
            ? -1
            : source.toLowerCase().indexOf(this.tuiHighlight.toLowerCase());
    }

    private setUpHighlight(): HTMLElement {
        const highlight = this.renderer.createElement(`div`);
        const {style} = highlight;

        style.background = this.tuiHighlightColor;
        style.zIndex = `-1`;
        style.position = `absolute`;
        this.renderer.appendChild(this.elementRef.nativeElement, highlight);

        return highlight;
    }
}
