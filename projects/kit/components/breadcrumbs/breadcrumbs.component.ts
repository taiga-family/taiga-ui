import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    forwardRef,
    HostBinding,
    Input,
    QueryList,
    TemplateRef,
} from '@angular/core';
import {tuiDefaultProp, tuiEmptyQuery, TuiItemDirective} from '@taiga-ui/cdk';
import {TuiModeDirective, TuiSizeL} from '@taiga-ui/core';

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
    @tuiDefaultProp()
    size: TuiSizeL = 'm';

    @ContentChildren(TuiItemDirective, {read: TemplateRef})
    readonly items: QueryList<TemplateRef<Record<string, unknown>>> = tuiEmptyQuery();

    override readonly mode = 'onLight';
}
