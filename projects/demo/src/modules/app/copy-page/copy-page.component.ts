import {Clipboard} from '@angular/cdk/clipboard';
import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiGroup,
    tuiGroupOptionsProvider,
} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

import {PageMarkdown} from './page-markdown.service';

const COPIED_TIMEOUT = 2000;

@Component({
    standalone: true,
    imports: [TuiButton, TuiDataList, TuiDropdown],
    templateUrl: './copy-page.template.html',
    styleUrls: ['./copy-page.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiGroupOptionsProvider({size: 'm'})],
    hostDirectives: [TuiGroup],
})
export class CopyPage {
    private readonly pageMarkdown = inject(PageMarkdown);
    private readonly clipboard = inject(Clipboard);
    private readonly cache = new Map<string, string>();
    private readonly doc = inject(DOCUMENT);
    private readonly copied$ = new Subject<void>();

    protected open = false;
    // Each copy restarts the "Copied!" timeout; the subscription ends with the component.
    protected readonly copied = toSignal(
        this.copied$.pipe(
            switchMap(() =>
                timer(COPIED_TIMEOUT).pipe(map(TUI_FALSE_HANDLER), startWith(true)),
            ),
        ),
        {initialValue: false},
    );

    protected readonly icons = {
        copy: '@tui.copy',
        chevron: '@tui.chevron-down',
        check: '@tui.check',
    } as const;

    protected readonly icon = computed(() =>
        this.copied() ? this.icons.check : this.icons.copy,
    );

    protected readonly markdownUrl = this.pageMarkdown.url;

    constructor() {
        // Reuse the prerendered link: the client app does not hydrate, so a new one would leave a stale twin in <head>.
        const link =
            this.doc.head.querySelector<HTMLLinkElement>(
                'link[rel="alternate"][type="text/markdown"]',
            ) ?? this.doc.createElement('link');

        link.rel = 'alternate';
        link.type = 'text/markdown';

        effect((onCleanup) => {
            link.href = this.markdownUrl();
            this.doc.head.appendChild(link);
            onCleanup(() => link.remove());
        });
    }

    protected view(event: MouseEvent): void {
        event.preventDefault();
        this.open = false;
        this.doc.defaultView?.open(this.markdownUrl(), '_blank', 'noreferrer');
    }

    // Fetched lazily on click (not on every navigation) and cached per URL so a repeat click reuses it.
    protected async copy(): Promise<void> {
        const url = this.markdownUrl();
        const markdown = this.cache.get(url) ?? (await this.fetchMarkdown(url));

        if (!markdown || !this.clipboard.copy(markdown)) {
            return;
        }

        this.cache.set(url, markdown);
        this.copied$.next();
    }

    private async fetchMarkdown(url: string): Promise<string | null> {
        try {
            const response = await fetch(url);

            const isHtml = (response.headers.get('content-type') ?? '').includes(
                'text/html',
            );

            return response.ok && !isHtml ? await response.text() : null;
        } catch {
            return null;
        }
    }
}

export const PAGE_ACTIONS_CONTENT = new PolymorpheusComponent(CopyPage);
