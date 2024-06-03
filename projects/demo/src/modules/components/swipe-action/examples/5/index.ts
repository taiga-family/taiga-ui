import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSwipeActionsComponent} from '@taiga-ui/addon-mobile';
import {
    TuiButtonDirective,
    TuiDataListComponent,
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
    TuiOptionComponent,
    TuiSurfaceDirective,
    TuiTitleDirective,
} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {TuiCardLargeDirective, TuiCellDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiSwipeActionsComponent,
        TuiCardLargeDirective,
        TuiCellDirective,
        TuiSurfaceDirective,
        TuiAvatarComponent,
        TuiTitleDirective,
        TuiButtonDirective,
        TuiDropdownOpenDirective,
        TuiDropdownDirective,
        TuiDataListComponent,
        TuiOptionComponent,
        TuiAmountPipe,
        AsyncPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
