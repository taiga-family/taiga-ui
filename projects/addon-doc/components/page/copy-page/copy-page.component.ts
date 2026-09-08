import {isPlatformBrowser} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    PLATFORM_ID,
    signal,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NavigationEnd, Router} from '@angular/router';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiDropdown} from '@taiga-ui/core/portals/dropdown';
import {distinctUntilChanged, filter, from, map, of, startWith, switchMap} from 'rxjs';

@Component({
    selector: 'tui-doc-copy-page',
    imports: [TuiActiveZone, TuiButton, TuiDataList, TuiDropdown],
    templateUrl: './copy-page.template.html',
    styleUrl: './copy-page.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocCopyPage {
    private readonly router = inject(Router);
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

    protected readonly open = signal(false);
    protected readonly copied = signal(false);
    protected readonly icons = {copy: '@tui.copy', chevron: '@tui.chevron-down'} as const;

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

    protected viewAsMarkdown(): void {
        this.open.set(false);
        window.open(`${this.pagePath()}.md`, '_blank');
    }

    protected onActiveZone(active: boolean): void {
        if (!active) {
            this.open.set(false);
        }
    }

    private pagePath(): string {
        const [page = ''] = this.router.url.split(/[?#]/);

        return page;
    }

    private async fetchMarkdown(page: string): Promise<string | null> {
        try {
            const response = await fetch(`${page}.md`);
            // Static hosting (e.g. Firebase) answers a missing file with the SPA
            // fallback: `200` + `index.html`. Reject it so pages without markdown
            // don't show the action or copy the whole HTML document.
            const isHtml = (response.headers.get('content-type') ?? '').includes(
                'text/html',
            );

            return response.ok && !isHtml ? await response.text() : null;
        } catch {
            return null;
        }
    }
}
