import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    forwardRef,
    HostBinding,
    inject,
    Input,
    QueryList,
    TemplateRef,
} from '@angular/core';
import {EMPTY_QUERY, TuiItemDirective} from '@taiga-ui/cdk';
import {TuiModeDirective} from '@taiga-ui/core';

import {TUI_BREADCRUMBS_OPTIONS} from './breadcrumbs.options';

@Component({
    selector: 'tui-breadcrumbs',
    templateUrl: './breadcrumbs.template.html',
    styleUrls: ['./breadcrumbs.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TuiModeDirective,
            useExisting: forwardRef(() => TuiBreadcrumbsComponent),
        },
    ],
})
export class TuiBreadcrumbsComponent extends TuiModeDirective {
    protected readonly options = inject(TUI_BREADCRUMBS_OPTIONS);

    @Input()
    @HostBinding('attr.data-size')
    size = this.options.size;

    @ContentChildren(TuiItemDirective, {read: TemplateRef})
    readonly items: QueryList<TemplateRef<Record<string, unknown>>> = EMPTY_QUERY;

    override readonly mode = this.options.mode;
}
