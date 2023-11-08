import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-avatar-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiAvatarExample4 {
    readonly users = [
        'Alex Inkin',
        'Vladimir Potekhin',
        'Nikita Barsukov',
        'Maxim Ivanov',
    ];
}
