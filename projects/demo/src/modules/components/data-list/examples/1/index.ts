import {Component} from '@angular/core';
import {TUI_ARROW} from '@taiga-ui/kit';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-data-list-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiDataListExample1 {
    readonly arrow = TUI_ARROW;

    readonly groups = [
        {
            label: $localize`Components`,
            items: [
                {
                    label: 'Input',
                    routerLink: '/tui-input',
                },
                {
                    label: 'Select',
                    routerLink: '/tui-select',
                },
                {
                    label: 'DataList',
                    routerLink: '/tui-data-list',
                },
            ],
        },
        {
            label: $localize`Styles`,
            items: [
                {
                    label: $localize`Icons`,
                    routerLink: '/icons',
                },
                {
                    label: $localize`Typography`,
                    routerLink: '/typography',
                },
            ],
        },
        {
            label: '',
            items: [
                {
                    label: $localize`Changelog`,
                    routerLink: '/changelog',
                },
            ],
        },
    ];
}
