import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    forwardRef,
    HostBinding,
    inject,
    Input,
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
    private readonly options = inject(TUI_BREADCRUMBS_OPTIONS);

    @Input()
    @HostBinding('attr.data-size')
    public size = this.options.size;

    public override readonly mode = this.options.mode;

    @ContentChildren(TuiItemDirective, {read: TemplateRef})
    protected readonly items: QueryList<TemplateRef<Record<string, unknown>>> =
        EMPTY_QUERY;

    public get icon(): string {
        return this.options.icon;
    }
}
