import {Clipboard} from '@angular/cdk/clipboard';
import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
    signal,
} from '@angular/core';
import {TuiButton, TuiGroup, tuiGroupOptionsProvider} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {PageMarkdown} from './page-markdown.service';

@Component({
    standalone: true,
    imports: [TuiButton],
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

    protected readonly copied = signal(false);
    protected readonly icons = {
        copy: '@tui.copy',
        check: '@tui.check',
    } as const;

    protected readonly icon = computed(() =>
        this.copied() ? this.icons.check : this.icons.copy,
    );

    protected readonly markdownUrl = this.pageMarkdown.url;

    constructor() {
        const link = this.doc.createElement('link');

        link.rel = 'alternate';
        link.type = 'text/markdown';

        effect((onCleanup) => {
            link.href = this.markdownUrl();
            this.doc.head.appendChild(link);
            onCleanup(() => link.remove());
        });
    }

    // Fetched lazily on click (not on every navigation) and cached per URL so a repeat click reuses it.
    protected async copy(): Promise<void> {
        const url = this.markdownUrl();
        const markdown = this.cache.get(url) ?? (await this.fetchMarkdown(url));

        if (!markdown || !this.clipboard.copy(markdown)) {
            return;
        }

        this.cache.set(url, markdown);
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2000);
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
