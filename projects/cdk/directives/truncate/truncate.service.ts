import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

const ELLIPSIS = '\u2026';

@Injectable()
export class TuiTruncateService {
    private readonly el = tuiInjectElement();

    private readonly ctx = isPlatformBrowser(inject(PLATFORM_ID))
        ? inject(DOCUMENT).createElement('canvas').getContext('2d')
        : null;

    public truncate(text: string, lines: number): string {
        if (!this.ctx || !text || lines < 1) {
            return text;
        }

        const style = getComputedStyle(this.el);
        const fontFamily = style.fontFamily || 'sans-serif';
        const fontSize = style.fontSize || '14px';
        const fontWeight = style.fontWeight || '400';
        const paddingLeft = Number.parseFloat(style.paddingLeft) || 0;
        const paddingRight = Number.parseFloat(style.paddingRight) || 0;
        const availableWidth = this.el.clientWidth - paddingLeft - paddingRight;
        const safeWidth = Math.max(1, availableWidth - 4);

        this.ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;

        if (this.getLines(text, safeWidth).length <= lines) {
            return text;
        }

        let low = 1;
        let high = Math.max(1, text.length - ELLIPSIS.length);
        let best = truncate(text, 1, 0);

        while (low <= high) {
            const keepLength = Math.floor((low + high) / 2);
            const normalized = Math.max(1, keepLength);
            const left = Math.ceil(normalized / 2);
            const right = Math.floor(normalized / 2);
            const candidate = truncate(text, left, right);
            const candidateLines = this.getLines(candidate, safeWidth).length;

            if (candidateLines <= lines) {
                best = candidate;
                low = keepLength + 1;
            } else {
                high = keepLength - 1;
            }
        }

        return this.getLines(best, safeWidth).slice(0, lines).join(' ');
    }

    private getLines(text: string, maxWidth: number): string[] {
        if (!this.ctx || !text) {
            return [];
        }

        const words = text.split(' ');
        const lines: string[] = [];
        let currentLine = '';

        for (const word of words) {
            const candidate = currentLine ? `${currentLine} ${word}` : word;

            if (this.ctx.measureText(candidate).width <= maxWidth) {
                currentLine = candidate;
                continue;
            }

            if (currentLine) {
                lines.push(currentLine);
                currentLine = '';
            }

            if (this.ctx.measureText(word).width <= maxWidth) {
                currentLine = word;
                continue;
            }

            let chunk = '';

            for (const char of word) {
                const nextChunk = `${chunk}${char}`;

                if (this.ctx.measureText(nextChunk).width <= maxWidth) {
                    chunk = nextChunk;
                } else {
                    if (chunk) {
                        lines.push(chunk);
                    }

                    chunk = char;
                }
            }

            currentLine = chunk;
        }

        if (currentLine) {
            lines.push(currentLine);
        }

        return lines;
    }
}

function truncate(text: string, left: number, right: number): string {
    return `${text.slice(0, left)}${ELLIPSIS}${right > 0 ? text.slice(-right) : ''}`;
}
