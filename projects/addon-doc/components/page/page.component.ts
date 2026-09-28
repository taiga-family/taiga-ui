import {KeyValuePipe, NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChildren,
    inject,
    input,
    model,
} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';
import {
    TUI_DOC_ACTIONS,
    TUI_DOC_DEFAULT_TABS,
    TUI_DOC_MAP_PAGES,
    TUI_DOC_VERSION,
} from '@taiga-ui/addon-doc/tokens';
import {tuiVersionParts} from '@taiga-ui/addon-doc/utils';
import {TuiTitle} from '@taiga-ui/core/components/title';
import {TuiBadge} from '@taiga-ui/kit/components/badge';
import {TuiSegmented} from '@taiga-ui/kit/components/segmented';
import {TuiFade} from '@taiga-ui/kit/directives/fade';
import {TuiAutoColorPipe} from '@taiga-ui/kit/pipes/auto-color';
import {TuiHeader} from '@taiga-ui/layout/components/header';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDocSourceCode} from '../internal/source-code/source-code.component';
import {TuiDocToc} from '../toc';
import {TUI_DOC_TABS} from './page.providers';
import {TuiDocPageTabConnector} from './page-tab.directive';

@Component({
    selector: 'tui-doc-page',
    imports: [
        KeyValuePipe,
        NgTemplateOutlet,
        PolymorpheusOutlet,
        RouterLink,
        RouterLinkActive,
        TuiAutoColorPipe,
        TuiBadge,
        TuiDocSourceCode,
        TuiDocToc,
        TuiFade,
        TuiHeader,
        TuiSegmented,
        TuiTitle,
    ],
    templateUrl: './page.template.html',
    styleUrl: './page.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocPage {
    private readonly pages = inject(TUI_DOC_MAP_PAGES);
    private readonly major = tuiVersionParts(inject(TUI_DOC_VERSION)).major;

    protected readonly tabConnectors = contentChildren(TuiDocPageTabConnector);
    protected readonly tabs = inject(TUI_DOC_TABS)(inject(ActivatedRoute).snapshot);
    protected readonly defaultTabs = inject(TUI_DOC_DEFAULT_TABS);
    protected readonly actions = inject(TUI_DOC_ACTIONS);
    protected readonly from = / /g;
    protected readonly to = '_';
    protected readonly version = computed(() => {
        const explicit = this.pages.get(this.header())?.version;

        if (explicit) {
            return explicit;
        }

        return this.package() && !Number.isNaN(this.major) ? `${this.major}.0.0` : '';
    });

    public readonly header = input('');
    public readonly package = input('');
    public readonly type = input('');
    public readonly tags = input<string[]>([]);
    public readonly path = input('');
    public readonly activeItemIndex = model(0);
}
