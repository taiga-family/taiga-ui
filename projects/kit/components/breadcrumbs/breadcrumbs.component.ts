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
import {EMPTY_QUERY, TuiItemDirective} from '@taiga-ui/cdk';
import {TuiIconComponent, tuiLinkOptionsProvider} from '@taiga-ui/core';

import {TUI_BREADCRUMBS_OPTIONS} from './breadcrumbs.options';

@Component({
    standalone: true,
    selector: 'tui-breadcrumbs',
    imports: [NgIf, NgForOf, AsyncPipe, NgTemplateOutlet, TuiIconComponent],
    templateUrl: './breadcrumbs.template.html',
    styleUrls: ['./breadcrumbs.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiLinkOptionsProvider({appearance: 'icon'})],
})
export class TuiBreadcrumbsComponent {
    @ContentChildren(TuiItemDirective, {read: TemplateRef})
    protected readonly items: QueryList<TemplateRef<Record<string, unknown>>> =
        EMPTY_QUERY;

    protected readonly options = inject(TUI_BREADCRUMBS_OPTIONS);

    @Input()
    @HostBinding('attr.data-size')
    public size = this.options.size;
}
