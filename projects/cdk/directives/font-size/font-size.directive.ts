import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {DestroyRef, Directive, inject, type OnInit, PLATFORM_ID} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateTokenFromFactory, tuiInjectElement} from '@taiga-ui/cdk/utils';

const IFRAME = 'position: fixed; visibility: hidden; pointer-events: none';
const BODY = 'height: fit-content; line-height: 1em;';

export const TUI_FONT_SIZE_HANDLER = tuiCreateTokenFromFactory<TuiStringHandler<number>>(
    () => (size) => `${Math.max(size, 16)}`,
);

@Directive({
    standalone: true,
    host: {
        '(window:resize.zoneless)': 'onResize()',
    },
})
export class TuiFontSize implements OnInit {
    private readonly el = tuiInjectElement();
    private readonly doc = inject(DOCUMENT);
    private readonly iframe = this.doc.createElement('iframe');
    private readonly handler = inject(TUI_FONT_SIZE_HANDLER);
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    private readonly destroyRef = inject(DestroyRef);

    public ngOnInit(): void {
        this.doc.body.append(this.iframe);
        this.iframe.setAttribute('style', IFRAME);
        this.onResize();

        if (!this.isBrowser) {
            return;
        }

        const doc = this.iframe.contentWindow?.document;
        const observer = new ResizeObserver(() =>
            this.el.style.setProperty(
                '--tui-font-size',
                this.handler(doc?.body.offsetHeight || 0),
            ),
        );

        doc?.documentElement.style.setProperty('font', '-apple-system-body');
        doc?.body.setAttribute('style', BODY);
        doc?.body.insertAdjacentText('beforeend', '.'.repeat(1000));
        observer.observe(doc?.body || this.iframe);

        this.destroyRef.onDestroy(() => {
            observer.disconnect();
            this.iframe.remove();
        });
    }

    protected onResize(): void {
        const {
            innerWidth = 0,
            outerWidth = 0,
            devicePixelRatio = 1,
        } = this.doc.defaultView || {};

        this.iframe.width = `${innerWidth === outerWidth ? innerWidth : innerWidth / devicePixelRatio}`;
    }
}
