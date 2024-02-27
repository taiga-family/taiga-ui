import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-card-medium-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiCardMediumExample4 {
    protected readonly urls = [
        'https://avatars.githubusercontent.com/u/11832552',
        'https://avatars.githubusercontent.com/u/10106368',
        'https://avatars.githubusercontent.com/u/46284632',
    ];
}
