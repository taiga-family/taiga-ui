import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    effect,
    inject,
    input,
    PLATFORM_ID,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {
    WaMutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {map} from 'rxjs';

const DOT = '…';
const SAMPLE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

@Component({
    template: '',
    styleUrl: './truncate.styles.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Styles {}

@Directive({
    selector: '[tuiTruncate]',
    providers: [
        WaResizeObserverService,
        WaMutationObserverService,
        {
            provide: WA_MUTATION_OBSERVER_INIT,
            useValue: {
                attributeOldValue: true,
                characterData: true,
                childList: true,
                subtree: true,
            },
        },
    ],
    host: {
        tuiTruncate: '',
    },
})
export class TuiTruncate {
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    private readonly el = tuiInjectElement();
    private readonly doc = inject(DOCUMENT);
    private readonly canvas = this.isBrowser ? this.doc.createElement('canvas') : null;
    private readonly ctx = this.canvas?.getContext('2d') ?? null;
    private readonly clientWidth = toSignal(
        inject(WaResizeObserverService, {self: true}).pipe(
            map(([e]) => (e?.target as HTMLElement | null)?.clientWidth ?? 0),
            takeUntilDestroyed(),
        ),
        {initialValue: 0},
    );

    protected readonly nothing = tuiWithStyles(Styles);

    protected readonly text = toSignal(
        inject(WaMutationObserverService, {self: true}).pipe(
            map(() => this.el.innerText),
            takeUntilDestroyed(),
        ),
        {initialValue: this.el.innerText},
    );

    public readonly lines = input(1, {
        alias: 'tuiTruncate',
        transform: (value: unknown) => Math.max(Number(value) || 1, 1),
    });

    protected readonly $ = effect(() => {
        if (!this.clientWidth()) {
            return;
        }

        const text = this.text();
        const lines = this.lines();

        queueMicrotask(() => {
            const truncated = this.truncate(text, lines);

            this.el.setAttribute('title', text);
            this.el.setAttribute('data-text', truncated);
            this.el.setAttribute('data-line-clamp', lines.toString());
        });
    });

    private buildTruncated(text: string, left: number, right: number): string {
        return `${text.slice(0, left)}${DOT}${text.slice(-right)}`;
    }

    /**
     * Caretaker note:
     * Text truncation algorithm based on CanvasRenderingContext2D text metrics.
     * Inspired by techniques discussed in:
     * - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/measureText
     * - https://html.spec.whatwg.org/multipage/canvas.html#textmetrics
     * - https://stackoverflow.com/questions/2936112/text-wrap-in-a-canvas-element?utm_source=chatgpt.com
     *
     * The approach uses `canvas.measureText()` to compute text width in pixels
     * and performs a binary-style reduction to fit text into the available width.
     * Center truncation logic adapted for filenames and multi-line layouts.
     */
    private truncate(text: string, lines: number): string {
        if (!this.isBrowser || !this.ctx) {
            return text;
        }

        const computed = getComputedStyle(this.el);
        const fontFamily = computed.fontFamily || 'sans-serif';
        const fontSize = computed.fontSize || '14px';
        const fontWeight = computed.fontWeight || '400';
        const lineHeight = parseFloat(computed.lineHeight) || parseFloat(fontSize) * 1.2;
        const paddingLeft = parseFloat(computed.paddingLeft) || 0;
        const paddingRight = parseFloat(computed.paddingRight) || 0;
        const availableWidth = this.el.clientWidth - paddingLeft - paddingRight;
        const maxHeight = lineHeight * lines;
        const heightLimit = Math.min(maxHeight, maxHeight);

        this.ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;

        const fullWidth = this.ctx.measureText(text).width;

        if (fullWidth <= availableWidth) {
            return text;
        }

        const avgCharWidth = this.ctx.measureText(SAMPLE).width / SAMPLE.length;
        const maxCharsPerLine = Math.floor(availableWidth / avgCharWidth);
        const maxChars = Math.max(
            4,
            Math.floor(maxCharsPerLine * (heightLimit / lineHeight)),
        );

        if (text.length <= maxChars) {
            return text;
        }

        const keepLength = maxChars - DOT.length;
        const left = Math.ceil(keepLength / 2);
        let right = Math.floor(keepLength / 2);
        let truncated = this.buildTruncated(text, left, right);

        while (right < text.length) {
            const best = this.buildTruncated(text, left, right + 1);
            const width = this.ctx.measureText(best).width;

            if (width < availableWidth) {
                right++;

                truncated = best;
            } else {
                break;
            }
        }

        return truncated;
    }
}
