import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotificationComponent, TuiSurfaceDirective} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiCardLargeDirective, TuiCellDirective} from '@taiga-ui/layout';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiNotificationComponent,
        TuiCellDirective,
        TuiAvatarComponent,
        TuiSelectModule,
        TuiDataListWrapper,
        TuiTextfieldControllerModule,
        TuiCardLargeDirective,
        TuiSurfaceDirective,
        NgFor,
        FormsModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly items = [
        {
            icon: 'tuiIconEyeLarge',
            title: 'Show more',
            subtitle: 'Ctrl + Shift + M',
        },
        {
            icon: 'tuiIconMailLarge',
            title: 'Send message',
            subtitle: 'Keep it short',
        },
        {
            icon: 'tuiIconLockLarge',
            title: 'Access',
            subtitle: 'Block your account',
        },
    ];

    protected value = this.items[0];
}
