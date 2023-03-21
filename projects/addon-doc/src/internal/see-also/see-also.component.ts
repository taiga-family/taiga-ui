import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';

import type {TuiDocPage} from '../../interfaces/page';
import {TUI_DOC_SEE_ALSO_TEXT} from '../../tokens/i18n';
import {TUI_DOC_MAP_PAGES} from '../../tokens/pages';

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
