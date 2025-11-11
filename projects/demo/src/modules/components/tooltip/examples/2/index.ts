import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorPipe, TuiHint, TuiLink} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    imports: [RouterLink, TuiAutoColorPipe, TuiAvatar, TuiHint, TuiLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
