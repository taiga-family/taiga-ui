import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiSwitchComponent, tuiSwitchOptionsProvider} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule, TuiSwitchComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiSwitchOptionsProvider({showIcons: false, appearance: () => 'primary'}),
    ],
})
export default class ExampleComponent {
    protected value = false;
}
