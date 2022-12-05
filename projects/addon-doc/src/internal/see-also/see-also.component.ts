import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';

import {TuiDocPage, TuiDocPageGroup} from '../../interfaces/page';
import {TUI_DOC_SEE_ALSO_TEXT} from '../../tokens/i18n';
import {TUI_DOC_PAGES} from '../../tokens/pages';

@Component({
    selector: `tui-doc-see-also`,
    templateUrl: `./see-also.template.html`,
    styleUrls: [`./see-also.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocSeeAlsoComponent {
    @Input()
    seeAlso: readonly string[] = [];

    constructor(
        @Inject(TUI_DOC_SEE_ALSO_TEXT) readonly text: string,
        @Inject(TUI_DOC_PAGES)
        private readonly pages: ReadonlyArray<TuiDocPage | TuiDocPageGroup>,
    ) {}

    getRouterLink(pageTitle: string): string {
        for (let i = 0; i < this.pages.length; i++) {
            const page = this.pages
                .map(page => (`subPages` in page ? page.subPages : [page]))
                .reduce((pages, subPages) => [...pages, ...subPages], [])
                .find((page: TuiDocPage) => page.title === pageTitle);

            if (page?.route) {
                return page.route;
            }
        }

        return ``;
    }
}
