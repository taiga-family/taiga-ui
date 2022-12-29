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
import {EMPTY_QUERY, tuiDefaultProp, TuiItemDirective} from '@taiga-ui/cdk';
import {TuiModeDirective, TuiSizeL} from '@taiga-ui/core';
import {Subject} from 'rxjs';

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
export class TuiBreadcrumbsComponent implements TuiModeDirective {
    @Input()
    @HostBinding('attr.data-size')
    @tuiDefaultProp()
    size: TuiSizeL = 'm';

    @ContentChildren(TuiItemDirective, {read: TemplateRef})
    readonly items: QueryList<TemplateRef<Record<string, unknown>>> = EMPTY_QUERY;

    readonly change$ = new Subject<void>();
    readonly mode = 'onLight';

    ngOnChanges(): void {}
}
