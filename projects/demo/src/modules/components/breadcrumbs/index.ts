import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiItemDirective} from '@taiga-ui/cdk';
import {TuiLinkDirective, type TuiSizeL} from '@taiga-ui/core';
import {TuiBreadcrumbsComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        RouterLink,
        TuiDemo,
        TuiBreadcrumbsComponent,
        TuiItemDirective,
        TuiLinkDirective,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleComponent {
    protected readonly itemsVariants = [
        [
            {
                caption: 'Select',
                routerLink: '/tui-select',
            },
            {
                caption: 'MultiSelect',
                routerLink: '/tui-multi-select',
            },
            {
                caption: 'InputTag',
                routerLink: '/tui-input-tag',
            },
            {
                caption: 'Current',
                routerLink: '/tui-breadcrumbs',
            },
        ],
    ];

    protected items = this.itemsVariants[0];

    protected readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    protected size: TuiSizeL = this.sizeVariants[0];

    protected readonly examples = [
        {name: 'Basic'},
        {name: 'More button', description: 'Plus using DI options'},
    ];
}
