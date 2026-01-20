import {
    ChangeDetectionStrategy,
    Component,
    inject,
    type OnInit,
    signal,
} from '@angular/core';
import {RouterLink} from '@angular/router';
import {
    TUI_DOC_MAP_PAGES,
    TUI_DOC_SEE_ALSO,
    TUI_DOC_SEE_ALSO_TEXT,
    TUI_DOC_TOC_TEXT,
} from '@taiga-ui/addon-doc/tokens';
import {TuiDocKebabPipe, tuiToKebab} from '@taiga-ui/addon-doc/utils';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiArrayToggle} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TuiTitle} from '@taiga-ui/core/components/title';

import {TuiDocPage} from '../page/page.component';

@Component({
    selector: 'tui-doc-toc',
    imports: [RouterLink, TuiDocKebabPipe, TuiLink, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'(document:tui-example)': 'onExample($event.detail)'},
})
export class TuiDocToc implements OnInit {
    private readonly el = tuiInjectElement();
    private readonly pages = inject(TUI_DOC_MAP_PAGES);
    private examples: readonly string[] = [];
    private active = '';

    protected readonly toc = signal<readonly string[]>([]);
    protected readonly seeAlso = getSeeAlso();
    protected readonly text = {
        toc: inject(TUI_DOC_TOC_TEXT),
        seeAlso: inject(TUI_DOC_SEE_ALSO_TEXT),
    };

    public ngOnInit(): void {
        setTimeout(() => {
            const page = this.el.closest('tui-doc-page');
            const links = page?.querySelectorAll('tui-doc-example > header .t-link');
            const toc = Array.from(links || []).map((el) => el.textContent?.trim() || '');

            this.toc.set(toc);
        });
    }

    protected isActive(fragment: string): boolean {
        return this.active ? fragment === this.active : fragment === this.toc()[0];
    }

    protected getRouterLink(pageTitle: string): string {
        return this.pages.get(pageTitle)?.route ?? '';
    }

    protected onExample(example: string): void {
        const toc = this.toc();

        this.examples = tuiArrayToggle(this.examples, example);
        this.active =
            toc.find((item) => this.examples.includes(tuiToKebab(item))) ||
            toc[toc.length - 1] ||
            '';
    }
}

function getSeeAlso(): string[] {
    const current = inject(TuiDocPage).header() || '';
    const groups =
        inject(TUI_DOC_SEE_ALSO).filter((group) => group.includes(current)) || [];

    return Array.from(
        new Set(
            groups
                .join()
                .split(',')
                .filter((component) => component && component !== current),
        ),
    );
}
