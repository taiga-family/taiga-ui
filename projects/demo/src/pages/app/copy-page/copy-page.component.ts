import {Clipboard} from '@angular/cdk/clipboard';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
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

const COPIED_TIMEOUT = 1500;

@Component({
    imports: [TuiButton, TuiDataList, TuiDropdown],
    templateUrl: './copy-page.template.html',
    styleUrl: './copy-page.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiGroupOptionsProvider({size: 'm'}), PageMarkdown],
    hostDirectives: [TuiGroup],
})
export class CopyPage {
    private readonly pageMarkdown = inject(PageMarkdown);
    private readonly clipboard = inject(Clipboard);
    private readonly cache = new Map<string, string>();
    private readonly copied$ = new Subject<void>();

    protected readonly open = signal(false);
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
