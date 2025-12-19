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
import {TUI_DOC_DEFAULT_TABS, TUI_DOC_SUPPORT_LANGUAGE} from '@taiga-ui/addon-doc/tokens';
import {TuiChip} from '@taiga-ui/kit/components/chip';
import {TuiTabs} from '@taiga-ui/kit/components/tabs';
import {TuiAutoColorPipe} from '@taiga-ui/kit/pipes/auto-color';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDocSeeAlso} from '../internal/see-also';
import {TuiDocSourceCode} from '../internal/source-code/source-code.component';
import {TuiDocLanguageSwitcher} from '../language-switcher';
import {PAGE_PROVIDERS, PAGE_SEE_ALSO, TUI_DOC_TABS} from './page.providers';
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
        TuiChip,
        TuiDocLanguageSwitcher,
        TuiDocSeeAlso,
        TuiDocSourceCode,
        TuiTabs,
    ],
    templateUrl: './page.template.html',
    styleUrl: './page.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: PAGE_PROVIDERS,
})
export class TuiDocPage {
    protected readonly tabs = inject(TUI_DOC_TABS)(inject(ActivatedRoute).snapshot);
    protected readonly supportLanguage = inject(TUI_DOC_SUPPORT_LANGUAGE);
    protected readonly defaultTabs = inject(TUI_DOC_DEFAULT_TABS);
    protected readonly from = / /g;
    protected readonly to = '_';

    public readonly header = input('');

    public readonly package = input('');

    public readonly type = input('');

    public readonly tags = input<string[]>([]);

    public readonly path = input('');

    public readonly deprecated = input<boolean | ''>(false);

    public readonly tabConnectors = contentChildren(TuiDocPageTabConnector);

    public readonly activeItemIndex = model(0);

    public readonly seeAlso = inject(PAGE_SEE_ALSO);

    public readonly showSeeAlso = computed((): boolean => {
        return !!this.seeAlso().length && this.activeItemIndex() === 0;
    });
}
