import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItemDirective} from '@taiga-ui/cdk';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TuiBreadcrumbsComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgFor,
        RouterLink,
        TuiBreadcrumbsComponent,
        TuiLinkDirective,
        TuiItemDirective,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
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
