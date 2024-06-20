import {AsyncPipe, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    HostBinding,
    inject,
    Input,
    TemplateRef,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {tuiLinkOptionsProvider} from '@taiga-ui/core/components/link';

import type {TuiBreadcrumbsOptions} from './breadcrumbs.options';
import {TUI_BREADCRUMBS_OPTIONS} from './breadcrumbs.options';

@Component({
    standalone: true,
    selector: 'tui-breadcrumbs',
    imports: [NgIf, NgForOf, AsyncPipe, NgTemplateOutlet, TuiIcon],
    templateUrl: './breadcrumbs.template.html',
    styleUrls: ['./breadcrumbs.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiLinkOptionsProvider({appearance: 'icon'})],
})
export class TuiBreadcrumbsComponent {
    @ContentChildren(TuiItem, {read: TemplateRef})
    protected readonly items: QueryList<TemplateRef<Record<string, unknown>>> =
        EMPTY_QUERY;

    protected readonly options = inject(TUI_BREADCRUMBS_OPTIONS);

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiBreadcrumbsOptions['size'] = this.options.size;
}
