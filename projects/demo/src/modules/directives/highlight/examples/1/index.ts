import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHighlight} from '@taiga-ui/kit';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    imports: [
        FormsModule,
        NgForOf,
        TuiHighlight,
        TuiInputModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected search = '';

    protected readonly rows = [
        ['King Arthur', '-', 'Arrested'],
        ['Sir Bedevere', 'The Wise', 'Arrested'],
        ['Sir Lancelot', 'The Brave', 'Arrested'],
        ['Sir Galahad', 'The Chaste', 'Killed'],
        ['Sir Robin', 'The Not-Quite-So-Brave-As-Sir-Lancelot', 'Killed'],
    ];
}
