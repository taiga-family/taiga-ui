import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TUI_DOC_MAP_PAGES, TUI_DOC_SEE_ALSO_TEXT} from '@taiga-ui/addon-doc/tokens';
import {TuiLink} from '@taiga-ui/core/components/link';

@Component({
    selector: 'tui-doc-see-also',
    imports: [RouterLink, TuiLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocSeeAlso {
    private readonly pages = inject(TUI_DOC_MAP_PAGES);
    protected readonly text = inject(TUI_DOC_SEE_ALSO_TEXT);

    public readonly seeAlso = input<readonly string[]>([]);

    protected getRouterLink(pageTitle: string): string {
        return this.pages.get(pageTitle)?.route ?? '';
    }
}
