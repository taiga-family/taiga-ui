import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    forwardRef,
    HostBinding,
    Inject,
    Input,
    QueryList,
    TemplateRef,
} from '@angular/core';
import {EMPTY_QUERY, TuiItemDirective} from '@taiga-ui/cdk';
import {TuiModeDirective} from '@taiga-ui/core';

import {TUI_BREADCRUMBS_OPTIONS, TuiBreadcrumbsOptions} from './breadcrumbs.options';

@Component({
    selector: 'tui-breadcrumbs',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './breadcrumbs.template.html',
    styleUrls: ['./breadcrumbs.style.less'],
    providers: [
        {
            provide: TuiModeDirective,
            useExisting: forwardRef(() => TuiBreadcrumbsComponent),
        },
    ],
})
export class TuiBreadcrumbsComponent extends TuiModeDirective {
    @Input()
    @HostBinding('attr.data-size')
    size = this.options.size;

    @ContentChildren(TuiItemDirective, {read: TemplateRef})
    readonly items: QueryList<TemplateRef<Record<string, unknown>>> = EMPTY_QUERY;

    override readonly mode = this.options.mode;

    constructor(
        @Inject(TUI_BREADCRUMBS_OPTIONS) readonly options: TuiBreadcrumbsOptions,
    ) {
        super();
    }
}
