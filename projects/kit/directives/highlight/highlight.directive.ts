import {DOCUMENT} from '@angular/common';
import {Directive, inject, input, type OnChanges} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {svgNodeFilter} from '@taiga-ui/cdk/constants';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';

export const [TUI_HIGHLIGHT_OPTIONS, tuiHighlightOptionsProvider] = tuiCreateOptions({
    highlightColor: 'var(--tui-service-selection-background)',
});

@Directive({
    selector: '[tuiHighlight]',
    providers: [WaResizeObserverService],
    host: {
        '[style.position]': '"relative"',
        '[style.z-index]': '0',
    },
})
export class TuiHighlight implements OnChanges {
    private readonly el = tuiInjectElement();
    private readonly options = inject(TUI_HIGHLIGHT_OPTIONS);
    private readonly doc = inject(DOCUMENT);
    private readonly highlight = this.setUpHighlight();

    private readonly treeWalker = this.doc.createTreeWalker(
        this.el,
        NodeFilter.SHOW_TEXT,
        svgNodeFilter,
    );

    public readonly tuiHighlight = input('');
    public readonly tuiHighlightColor = input(this.options.highlightColor);

    constructor() {
        inject(WaResizeObserverService, {self: true})
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.updateStyles());
    }

    public ngOnChanges(): void {
        this.updateStyles();
    }

    protected get match(): boolean {
        const query = this.tuiHighlight().toLowerCase();

        return !!query && !!this.el.textContent?.toLowerCase().includes(query);
    }

    private updateStyles(): void {
        this.highlight.style.display = 'none';

        if (!this.match) {
            return;
        }

        this.treeWalker.currentNode = this.el;

        do {
            const node = this.treeWalker.currentNode;
            const offsets = this.getOffsets(node.nodeValue ?? '');

            if (!offsets) {
                continue;
            }

            const range = this.doc.createRange();

            range.setStart(node, offsets[0]);
            range.setEnd(node, offsets[1]);

            const hostRect = this.el.getBoundingClientRect();
            const {left, top, width, height} = range.getBoundingClientRect();
            const {style} = this.highlight;

            style.background = this.tuiHighlightColor();
            style.left = tuiPx(left - hostRect.left);
            style.top = tuiPx(top - hostRect.top);
            style.width = tuiPx(width);
            style.height = tuiPx(height);
            style.display = 'block';

            return;
        } while (this.treeWalker.nextNode());
    }

    private getOffsets(source: string): readonly [number, number] | null {
        const text = source.toLowerCase();
        const query = this.tuiHighlight().toLowerCase();
        const start = text.indexOf(query);
        const end = start + query.length;

        if (!query || start === -1) {
            return null;
        }

        return text.length === source.length
            ? [start, end]
            : [
                  this.toSourceOffset(source, start),
                  this.toSourceOffset(source, end, true),
              ];
    }

    private toSourceOffset(source: string, position: number, roundUp = false): number {
        let offset = 0;
        let remaining = position;

        for (const char of source) {
            const length = char.toLowerCase().length;

            if (remaining < length) {
                if (!remaining || length === char.length) {
                    return offset + remaining;
                }

                // A boundary within an expanded character must include the entire source character.
                return roundUp ? offset + char.length : offset;
            }

            remaining -= length;
            offset += char.length;
        }

        return offset;
    }

    private setUpHighlight(): HTMLElement {
        const highlight = this.doc.createElement('div');
        const {style} = highlight;

        style.background = this.options.highlightColor;
        style.zIndex = '-1';
        style.position = 'absolute';
        this.el.appendChild(highlight);

        return highlight;
    }
}
