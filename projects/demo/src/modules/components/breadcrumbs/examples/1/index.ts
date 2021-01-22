import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-breadcrumbs-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiBreadcrumbsExample1 {
    items = [
        {
            caption: 'Selects',
            routerLink: '/tui-select',
        },
        {
            caption: 'Multi',
            routerLink: '/tui-multi-select',
        },
        {
            caption: 'With tags',
            routerLink: '/tui-multi-select',
        },
        {
            caption: 'Current',
            routerLink: '/tui-breadcrumbs',
            routerLinkActiveOptions: {exact: true},
        },
    ];
}
