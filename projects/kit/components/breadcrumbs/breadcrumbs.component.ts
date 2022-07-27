import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {tuiDefaultProp, TuiMapper} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core';
import {DEFAULT_ROUTER_LINK_OPTIONS} from '@taiga-ui/kit/constants';
import {TuiBreadCrumbsItem} from '@taiga-ui/kit/interfaces';

/** @deprecated use `<tui-breadcrumbs>` from {@link TuiBreadcrumbsWrapperComponent} */
@Component({
    selector: `tui-breadcrumbs[items]`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: `./breadcrumbs.template.html`,
    styleUrls: [`./breadcrumbs.style.less`],
})
export class TuiBreadcrumbsComponent {
    @Input()
    @tuiDefaultProp()
    items: readonly TuiBreadCrumbsItem[] = [];

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeL = `m`;

    readonly routerLinkOptions: TuiMapper<TuiBreadCrumbsItem, any> = ({
        routerLinkOptions,
    }) => routerLinkOptions || DEFAULT_ROUTER_LINK_OPTIONS;
}
