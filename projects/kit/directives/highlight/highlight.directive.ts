import {DOCUMENT} from '@angular/common';
import type {OnChanges} from '@angular/core';
import {Directive, inject, Input, Renderer2} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {svgNodeFilter, tuiInjectElement, tuiPx} from '@taiga-ui/cdk';

@Directive({
    standalone: true,
    selector: '[tuiHighlight]',
    providers: [ResizeObserverService],
    host: {
        '[style.position]': '"relative"',
        '[style.zIndex]': '0',
    },
})
export class TuiHighlight implements OnChanges {
    private readonly el = tuiInjectElement();
    private readonly renderer = inject(Renderer2);
    private readonly doc = inject(DOCUMENT);
    private readonly highlight: HTMLElement = this.setUpHighlight();
    private readonly treeWalker = this.doc.createTreeWalker(
        this.el,
        NodeFilter.SHOW_TEXT,
        svgNodeFilter,
    );

    @Input()
    public tuiHighlight = '';

    @Input()
    public tuiHighlightColor = 'var(--tui-selection)';

    constructor() {
        inject(ResizeObserverService)
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.updateStyles());
    }

    public ngOnChanges(): void {
        this.updateStyles();
    }

    protected get match(): boolean {
        return this.indexOf(this.el.textContent) !== -1;
    }

    private updateStyles(): void {
        this.highlight.style.display = 'none';

        if (!this.match) {
            return;
        }

        this.treeWalker.currentNode = this.el;

        do {
            const index = this.indexOf(this.treeWalker.currentNode.nodeValue);

            if (index === -1) {
                continue;
            }

            const range = this.doc.createRange();

            range.setStart(this.treeWalker.currentNode, index);
            range.setEnd(this.treeWalker.currentNode, index + this.tuiHighlight.length);

            const hostRect = this.el.getBoundingClientRect();
            const {left, top, width, height} = range.getBoundingClientRect();
            const {style} = this.highlight;

            style.background = this.tuiHighlightColor;
            style.left = tuiPx(left - hostRect.left);
            style.top = tuiPx(top - hostRect.top);
            style.width = tuiPx(width);
            style.height = tuiPx(height);
            style.display = 'block';

            return;
        } while (this.treeWalker.nextNode());
    }

    private indexOf(source: string | null): number {
        return !source || !this.tuiHighlight
            ? -1
            : source.toLowerCase().indexOf(this.tuiHighlight.toLowerCase());
    }

    private setUpHighlight(): HTMLElement {
        const highlight = this.renderer.createElement('div');
        const {style} = highlight;

        style.background = this.tuiHighlightColor;
        style.zIndex = '-1';
        style.position = 'absolute';
        this.renderer.appendChild(this.el, highlight);

        return highlight;
    }
}
