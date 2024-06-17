import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorPipe, TuiHintDirective, TuiLink} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiLink,
        RouterLink,
        TuiAvatarComponent,
        TuiHintDirective,
        TuiAutoColorPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
