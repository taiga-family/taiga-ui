import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TuiBreadcrumbsModule} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [NgFor, RouterLink, TuiBreadcrumbsModule, TuiLinkDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected items = [
        {
            caption: 'Selects',
            routerLink: '/components/select',
        },
        {
            caption: 'Multi',
            routerLink: '/components/multi-select',
        },
        {
            caption: 'With tags',
            routerLink: '/components/multi-select',
        },
        {
            caption: 'Current',
            routerLink: '/navigation/breadcrumbs',
            routerLinkActiveOptions: {exact: true},
        },
    ];
}
