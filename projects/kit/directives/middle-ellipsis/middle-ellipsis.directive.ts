import {isPlatformBrowser} from '@angular/common';
import type {AfterViewInit, OnInit} from '@angular/core';
import {Directive, inject, PLATFORM_ID, signal} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

const BUFFER = 4;

@Directive({
    standalone: true,
    selector: '[tuiMiddleEllipsis]',
    host: {
        '[attr.title]': 'title()',
    },
})
export class TuiMiddleEllipsis implements OnInit, AfterViewInit {
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    private readonly el = tuiInjectElement();
    protected readonly title = signal('');

    public ngOnInit(): void {
        this.title.set(this.el.innerText.trim());
    }

    public ngAfterViewInit(): void {
        if (this.isBrowser) {
            this.ellipsisMiddle();
        }
    }

    private ellipsisMiddle(): void {
        if (this.fits()) {
            return;
        }

        const originalText = this.el.innerText.trim();

        let left = 0;
        let right = originalText.length;
        let finalText = originalText;

        while (left <= right) {
            const charsToRemove = Math.floor((left + right) / 2);
            const half = Math.floor(charsToRemove / 2);
            const firstPart = originalText
                .slice(0, Math.ceil(originalText.length / 2) - half)
                .trim();
            const secondPart = originalText
                .slice(Math.floor(originalText.length / 2) + half)
                .trim();

            finalText = `${firstPart}…${secondPart}`;

            this.el.innerHTML = finalText;

            if (this.fits()) {
                right = charsToRemove - 1;
            } else {
                left = charsToRemove + 1;
            }
        }

        this.el.innerHTML = finalText;

        if (!this.fits()) {
            this.ellipsisMiddle();
        }
    }

    private fits(): boolean {
        return (
            this.el.scrollHeight <= this.el.clientHeight + BUFFER &&
            this.el.scrollWidth <= this.el.clientWidth
        );
    }
}
