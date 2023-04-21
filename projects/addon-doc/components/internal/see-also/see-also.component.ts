import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import type {TuiDocPage} from '@taiga-ui/addon-doc/interfaces';
import {TUI_DOC_MAP_PAGES, TUI_DOC_SEE_ALSO_TEXT} from '@taiga-ui/addon-doc/tokens';

@Component({
    selector: 'tui-doc-see-also',
    templateUrl: './see-also.template.html',
    styleUrls: ['./see-also.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocSeeAlsoComponent {
    @Input()
    seeAlso: readonly string[] = [];

    constructor(
        @Inject(TUI_DOC_SEE_ALSO_TEXT) readonly text: string,
        @Inject(TUI_DOC_MAP_PAGES) private readonly pages: Map<string, TuiDocPage>,
    ) {}

    getRouterLink(pageTitle: string): string {
        return this.pages.get(pageTitle)?.route ?? '';
    }
}
