import {Clipboard} from '@angular/cdk/clipboard';
import {isPlatformBrowser} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    PLATFORM_ID,
    signal,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {TUI_DOC_COPY_PAGE} from '@taiga-ui/addon-doc/tokens';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiGroup, tuiGroupOptionsProvider} from '@taiga-ui/core/directives/group';
import {TuiDropdown} from '@taiga-ui/core/portals/dropdown';
import {from, of, switchMap} from 'rxjs';

import {TuiDocPageMarkdown} from '../page-markdown.service';

@Component({
    selector: 'tui-doc-copy-page',
    imports: [TuiButton, TuiDataList, TuiDropdown],
    templateUrl: './copy-page.template.html',
    styleUrl: './copy-page.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiGroupOptionsProvider({size: 'm'})],
    hostDirectives: [TuiGroup],
})
export class TuiDocCopyPage {
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    private readonly pageMarkdown = inject(TuiDocPageMarkdown);
    private readonly clipboard = inject(Clipboard);

    protected readonly enabled = inject(TUI_DOC_COPY_PAGE);
    protected readonly open = signal(false);
    protected readonly copied = signal(false);
    protected readonly icons = {
        copy: '@tui.copy',
        chevron: '@tui.chevron-down',
        check: '@tui.check',
    } as const;

    protected readonly icon = computed(() =>
        this.copied() ? this.icons.check : this.icons.copy,
    );

    protected readonly markdownUrl = this.pageMarkdown.url;

    protected readonly markdown = toSignal(
        toObservable(this.markdownUrl).pipe(
            switchMap((url) =>
                this.isBrowser ? from(this.fetchMarkdown(url)) : of(null),
            ),
        ),
        {initialValue: null},
    );

    protected copy(): void {
        const markdown = this.markdown();

        if (!markdown || !this.clipboard.copy(markdown)) {
            return;
        }

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
