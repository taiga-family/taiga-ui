import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-highlight-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiHighlightExample4 {
    readonly rows = [
        ['King Arthur', '-', 'Arrested'],
        ['Sir Bedevere', 'The Wise', 'Arrested'],
        ['Sir Lancelot', 'The Brave', 'Arrested'],
        ['Sir Galahad', 'The Chaste', 'Killed'],
        ['Sir Robin', 'The Not-Quite-So-Brave-As-Sir-Lancelot', 'Killed'],
    ];

    /* cspell:disable-next-line */
    readonly search = ['Sir', 'Arrested', 'killed'];
}
