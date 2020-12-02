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
            caption: 'Селекты',
            routerLink: '/tui-select',
        },
        {
            caption: 'Мульти',
            routerLink: '/tui-multi-select',
        },
        {
            caption: 'С тегами',
            routerLink: '/tui-multi-select',
        },
        {
            caption: 'Текущая',
            routerLink: '/tui-breadcrumbs',
            routerLinkActiveOptions: {exact: true},
        },
    ];
}
