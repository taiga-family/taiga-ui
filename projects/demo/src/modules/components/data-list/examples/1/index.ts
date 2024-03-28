import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-data-list-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiDataListExample1 {
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
