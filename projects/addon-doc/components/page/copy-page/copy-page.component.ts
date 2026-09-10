import {isPlatformBrowser} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    PLATFORM_ID,
    signal,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NavigationEnd, Router} from '@angular/router';
import {TUI_DOC_COPY_PAGE} from '@taiga-ui/addon-doc/tokens';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiGroup} from '@taiga-ui/core/directives/group';
import {TuiDropdown, TuiDropdownOpen} from '@taiga-ui/core/portals/dropdown';
import {distinctUntilChanged, filter, from, map, of, startWith, switchMap} from 'rxjs';

@Component({
    selector: 'tui-doc-copy-page',
    imports: [TuiButton, TuiDataList, TuiDropdown, TuiDropdownOpen, TuiGroup],
    templateUrl: './copy-page.template.html',
    styleUrl: './copy-page.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocCopyPage {
    private readonly router = inject(Router);
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

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

    protected readonly markdown = toSignal(
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this.pagePath()),
            startWith(this.pagePath()),
            distinctUntilChanged(),
            switchMap((page) =>
                this.isBrowser ? from(this.fetchMarkdown(page)) : of(null),
            ),
        ),
        {initialValue: null},
    );

    protected async copy(): Promise<void> {
        const markdown = this.markdown();

        if (!markdown) {
            return;
        }

        await navigator.clipboard.writeText(markdown);
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2000);
    }

    protected markdownUrl(): string {
        return `${this.pagePath()}.md`;
    }

    private pagePath(): string {
        const [page = ''] = this.router.url.split(/[?#]/);
        let route = this.router.routerState.snapshot.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        // Tabbed pages live under a ':tab' child but share one base .md.
        return route.routeConfig?.path === ':tab'
            ? page.slice(0, page.lastIndexOf('/'))
            : page;
    }

    private async fetchMarkdown(page: string): Promise<string | null> {
        try {
            const response = await fetch(`${page}.md`);

            const isHtml = (response.headers.get('content-type') ?? '').includes(
                'text/html',
            );

            return response.ok && !isHtml ? await response.text() : null;
        } catch {
            return null;
        }
    }
}
