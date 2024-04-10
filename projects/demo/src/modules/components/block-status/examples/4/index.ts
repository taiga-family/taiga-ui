import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorPipe, TuiButtonDirective, TuiInitialsPipe} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {TuiBlockStatusModule} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        NgFor,
        TuiBlockStatusModule,
        TuiButtonDirective,
        TuiAvatarComponent,
        TuiAutoColorPipe,
        TuiInitialsPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly users = [
        'Alex Inkin',
        'Vladimir Potekhin',
        'Nikita Barsukov',
        'Maxim Ivanov',
    ];
}
