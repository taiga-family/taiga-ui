import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButtonDirective,
    TuiDataListComponent,
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
    TuiOptGroupDirective,
    TuiOptionComponent,
    TuiSvgComponent,
} from '@taiga-ui/core';
import {TuiChevronDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiChevronDirective,
        TuiDropdownOpenDirective,
        TuiDropdownDirective,
        TuiDataListComponent,
        TuiOptGroupDirective,
        NgForOf,
        TuiOptionComponent,
        RouterLinkActive,
        RouterLink,
        TuiSvgComponent,
        NgIf,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly groups = [
        {
            label: 'Components',
            items: [
                {
                    label: 'Input',
                    routerLink: '/components/input',
                },
                {
                    label: 'Select',
                    routerLink: '/components/select',
                },
                {
                    label: 'DataList',
                    routerLink: '/components/data-list',
                },
            ],
        },
        {
            label: 'Styles',
            items: [
                {
                    label: 'Icons',
                    routerLink: '/icons',
                },
                {
                    label: 'Typography',
                    routerLink: '/typography',
                },
            ],
        },
        {
            label: '',
            items: [
                {
                    label: 'Changelog',
                    routerLink: '/changelog',
                },
            ],
        },
    ];
}
