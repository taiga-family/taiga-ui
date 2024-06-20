import {NgForOf, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TUI_DOC_MAP_PAGES, TUI_DOC_SEE_ALSO_TEXT} from '@taiga-ui/addon-doc/tokens';
import {TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-doc-see-also',
    imports: [TuiLink, NgForOf, RouterLink, NgIf],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocSeeAlso {
    private readonly pages = inject(TUI_DOC_MAP_PAGES);
    protected readonly text = inject(TUI_DOC_SEE_ALSO_TEXT);

    @Input()
    public seeAlso: readonly string[] = [];

    protected getRouterLink(pageTitle: string): string {
        return this.pages.get(pageTitle)?.route ?? '';
    }
}
