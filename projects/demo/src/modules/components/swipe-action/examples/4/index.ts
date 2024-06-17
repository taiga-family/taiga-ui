import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSwipeActionsComponent} from '@taiga-ui/addon-mobile';
import {TuiButtonDirective, TuiSurfaceDirective, TuiTitleDirective} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiCheckboxComponent} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCellDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiSwipeActionsComponent,
        TuiSurfaceDirective,
        TuiCellDirective,
        TuiCardLarge,
        TuiAvatarComponent,
        TuiTitleDirective,
        TuiAmountPipe,
        AsyncPipe,
        NgIf,
        TuiButtonDirective,
        TuiCheckboxComponent,
        FormsModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected shareButton = false;
    protected editButton = true;
}
