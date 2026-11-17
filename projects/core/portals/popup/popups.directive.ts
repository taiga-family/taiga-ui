import {DOCUMENT} from '@angular/common';
import {Directive, effect, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {Meta} from '@angular/platform-browser';
import {
    provideMutationObserverInit,
    WaMutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_DARK_MODE} from '@taiga-ui/core/tokens';
import {catchError, EMPTY, map, tap} from 'rxjs';

const STYLES: Record<string, string> = {
    left: 'inset: 0 calc(100% - 0.5rem) 10% -0.5rem;',
    top: 'inset: -0.5rem 0 calc(100% - 0.5rem);',
    right: 'inset: 0 -0.5rem 10% calc(100% - 0.5rem);',
    bottom: 'inset: calc(100% - 0.5rem) 0 -0.5rem;',
};

const SELECTOR =
    'tui-modal:not(:has(.tui-backdrop-hidden)),[data-zone-top],[data-zone-bottom],[data-zone-left],[data-zone-right]';

const COMMON =
    'position:fixed;z-index:1000;mask-image:linear-gradient(black,transparent 0.01%);';

@Directive({
    providers: [
        WaMutationObserverService,
        provideMutationObserverInit({childList: true}),
    ],
})
export class TuiPopupsDirective {
    private running = false;
    private readonly el = tuiInjectElement();
    private readonly doc = inject(DOCUMENT);
    private readonly meta = inject(Meta);
    private readonly mode = inject(TUI_DARK_MODE);
    private readonly themes = this.meta
        .getTags('name="theme-color"')
        .filter(
            ({media, content}) =>
                media.includes('prefers-color-scheme') && content.length === 7,
        );

    private readonly element = toSignal(
        inject(WaMutationObserverService).pipe(
            map(() => this.el.querySelectorAll(SELECTOR)),
            map((elements) => elements[elements.length - 1]),
            catchError(() => EMPTY),
            tap((element) => {
                this.running = this.running || !!element;
            }),
        ),
    );

    protected readonly sync = effect(() => {
        const dark = this.mode();
        const element = this.element();

        if (this.themes.length !== 2) {
            return;
        }

        this.themes.forEach((tag) => this.meta.removeTagElement(tag));

        const meta = this.themes.find((t) => t.media.includes(dark ? 'dark' : 'light'))!;
        const color = element
            ? meta.content.replaceAll(/\w\w/g, (m) =>
                  Math.round(Number.parseInt(m, 16) / 4)
                      .toString(16)
                      .padStart(2, '0'),
              )
            : meta.content;

        this.update({
            top: element?.getAttribute('data-zone-top') ?? color,
            right: element?.getAttribute('data-zone-right') ?? color,
            bottom: element?.getAttribute('data-zone-bottom') ?? color,
            left: element?.getAttribute('data-zone-left') ?? color,
        });
    });

    private update(colors: Record<string, string>): void {
        this.meta.updateTag({name: 'theme-color', content: this.resolve(colors.top)});

        if (!this.running) {
            return;
        }

        const tags = Object.entries(colors).map(([direction, color]) =>
            this.doc.body.appendChild(
                Object.assign(this.doc.createElement('div'), {
                    style: `${STYLES[direction]}${COMMON}background:${color};`,
                }),
            ),
        );

        setTimeout(() => tags.forEach((tag) => tag.remove()), 1000);
    }

    private resolve(color = ''): string {
        return color.startsWith('var')
            ? getComputedStyle(this.doc.body).getPropertyValue(
                  color.replace('var(', '').slice(0, -1),
              )
            : color;
    }
}
