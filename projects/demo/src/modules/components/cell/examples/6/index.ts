import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, TuiDropdownModule, TuiGroupDirective} from '@taiga-ui/core';
import {TuiDataListWrapperModule} from '@taiga-ui/kit';
import {TuiCellDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCellDirective,
        TuiDropdownModule,
        TuiGroupDirective,
        TuiButtonDirective,
        TuiDataListWrapperModule,
        NgFor,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly items = [
        {
            icon: 'tuiIconPhone',
            toString: () => 'Call now',
        },
        {
            icon: 'tuiIconStar',
            toString: () => 'Add to favorites',
        },
        {
            icon: 'tuiIconTrash',
            toString: () => 'Remove item',
        },
    ];
}
