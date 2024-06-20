import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorPipe, TuiButton, TuiInitialsPipe} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarStack} from '@taiga-ui/kit';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        NgFor,
        TuiBlockStatus,
        TuiButton,
        TuiAvatar,
        TuiAutoColorPipe,
        TuiInitialsPipe,
        TuiAvatarStack,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly users = [
        'Alex Inkin',
        'Vladimir Potekhin',
        'Nikita Barsukov',
        'Maxim Ivanov',
    ];
}
