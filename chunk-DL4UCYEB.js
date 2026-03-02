import"./chunk-HU6DUUP4.js";var a=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {
    TuiAutoColorPipe,
    TuiAvatar,
    TuiAvatarStack,
    TuiInitialsPipe,
} from '@taiga-ui/kit';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAutoColorPipe,
        TuiAvatar,
        TuiAvatarStack,
        TuiBlockStatus,
        TuiButton,
        TuiInitialsPipe,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
`;export{a as default};
