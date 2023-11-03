import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiHighlightDirective} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputModule,
        TuiTextfieldControllerModule,
        FormsModule,
        NgForOf,
        TuiHighlightDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected search = '';

    protected readonly rows = [
        ['King Arthur', '-', 'Arrested'],
        ['Sir Bedevere', 'The Wise', 'Arrested'],
        ['Sir Lancelot', 'The Brave', 'Arrested'],
        ['Sir Galahad', 'The Chaste', 'Killed'],
        ['Sir Robin', 'The Not-Quite-So-Brave-As-Sir-Lancelot', 'Killed'],
    ];
}
