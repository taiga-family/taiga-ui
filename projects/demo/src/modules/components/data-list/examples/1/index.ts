import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiDropdown, TuiIcon} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';

@Component({
    imports: [
        RouterLink,
        RouterLinkActive,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiIcon,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
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
