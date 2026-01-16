import {DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PAGE_SEE_ALSO} from '@taiga-ui/addon-doc/components';
import {
    TUI_DOC_MAP_PAGES,
    TUI_DOC_SEE_ALSO_TEXT,
    TUI_DOC_TOC_TEXT,
} from '@taiga-ui/addon-doc/tokens';
import {tuiArrayToggle} from '@taiga-ui/cdk/utils';
import {TuiLink, TuiTitle} from '@taiga-ui/core/components';

@Component({
    selector: 'tui-doc-toc',
    imports: [RouterLink, TuiLink, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'(document:tui-example)': 'onExample($event.detail)'},
})
export class TuiDocToc {
    private readonly doc = inject(DOCUMENT);
    private readonly pages = inject(TUI_DOC_MAP_PAGES);
    private examples: readonly string[] = [];
    private active = '';

    protected readonly seeAlso = inject(PAGE_SEE_ALSO);
    protected readonly text = {
        toc: inject(TUI_DOC_TOC_TEXT),
        seeAlso: inject(TUI_DOC_SEE_ALSO_TEXT),
    };

    public readonly toc = input<readonly string[]>([]);

    protected onClick(title: string): void {
        this.doc.querySelector(`#${toKebab(title)}`)?.scrollIntoView();
    }

    protected isActive(fragment: string): boolean {
        return this.active ? fragment === this.active : fragment === this.toc()[0];
    }

    protected getRouterLink(pageTitle: string): string {
        return this.pages.get(pageTitle)?.route ?? '';
    }

    protected onExample(example: string): void {
        this.examples = tuiArrayToggle(this.examples, example);
        this.active =
            this.toc().find((item) => this.examples.includes(toKebab(item))) || '';
    }
}

function toKebab(value: string): string {
    return value
        .replaceAll(' ', '-')
        .replaceAll(
            /[A-Z]+(?![a-z])|[A-Z]/g,
            ($, ofs) => (ofs ? '-' : '') + $.toLowerCase(),
        );
}
