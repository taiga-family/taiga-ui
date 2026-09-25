import {Clipboard} from '@angular/cdk/clipboard';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TUI_DOC_COPY_PAGE_TEXTS, TUI_DOC_ICONS} from '@taiga-ui/addon-doc/tokens';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiGroup, tuiGroupOptionsProvider} from '@taiga-ui/core/directives/group';
import {TuiDropdown} from '@taiga-ui/core/portals/dropdown';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

import {TuiDocPageMarkdown} from './page-markdown.service';

const COPIED_TIMEOUT = 1500;

/**
 * Copies the page as Markdown. Provide it as {@link TUI_DOC_ACTIONS} content on portals
 * that serve a `.md` twin next to every page.
 */
@Component({
    selector: 'tui-doc-copy-page',
    imports: [TuiButton, TuiDataList, TuiDropdown],
    templateUrl: './copy-page.template.html',
    styleUrl: './copy-page.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiGroupOptionsProvider({size: 'm'}), TuiDocPageMarkdown],
    hostDirectives: [TuiGroup],
})
export class TuiDocCopyPage {
    private readonly clipboard = inject(Clipboard);
    private readonly cache = new Map<string, string>();
    private readonly copied$ = new Subject<void>();

    protected readonly icons = inject(TUI_DOC_ICONS);
    protected readonly texts = inject(TUI_DOC_COPY_PAGE_TEXTS);
    protected readonly url = inject(TuiDocPageMarkdown).url;
    protected readonly open = signal(false);

    protected readonly copied = toSignal(
        this.copied$.pipe(
            switchMap(() =>
                timer(COPIED_TIMEOUT).pipe(map(TUI_FALSE_HANDLER), startWith(true)),
            ),
        ),
        {initialValue: false},
    );

    protected readonly icon = computed(() =>
        this.copied() ? this.icons.copied : this.icons.copy,
    );

    // Fetched lazily on click (not on every navigation) and cached per URL so a repeat click reuses it.
    protected async copy(): Promise<void> {
        const url = this.url();
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
