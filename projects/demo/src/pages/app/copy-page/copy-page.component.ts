import {Clipboard} from '@angular/cdk/clipboard';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
    PLATFORM_ID,
    signal,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiGroup,
    tuiGroupOptionsProvider,
} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {from, of, switchMap} from 'rxjs';

import {PageMarkdown} from './page-markdown.service';

@Component({
    imports: [TuiButton, TuiDataList, TuiDropdown],
    templateUrl: './copy-page.template.html',
    styleUrl: './copy-page.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiGroupOptionsProvider({size: 'm'})],
    hostDirectives: [TuiGroup],
})
export class CopyPage {
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    private readonly pageMarkdown = inject(PageMarkdown);
    private readonly clipboard = inject(Clipboard);

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

    constructor() {
        const doc = inject(DOCUMENT);
        const link = doc.createElement('link');
        const describedBy = doc.createElement('link');

        link.rel = 'alternate';
        link.type = 'text/markdown';
        describedBy.rel = 'describedby';
        describedBy.href = '/llms.txt';

        effect((onCleanup) => {
            link.href = this.markdownUrl();
            doc.head.append(link, describedBy);
            onCleanup(() => {
                link.remove();
                describedBy.remove();
            });
        });
    }

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

export const PAGE_ACTIONS_CONTENT = new PolymorpheusComponent(CopyPage);
