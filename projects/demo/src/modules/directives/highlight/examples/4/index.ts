import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHighlightDirective, TuiToRegexpPipe} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiHighlightDirective, TuiToRegexpPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly rows = [
        ['King Arthur', '-', 'Arrested'],
        ['Sir Bedevere', 'The Wise', 'Arrested'],
        ['Sir Lancelot', 'The Brave', 'Arrested'],
        ['Sir Galahad', 'The Chaste', 'Killed'],
        ['Sir Robin', 'The Not-Quite-So-Brave-As-Sir-Lancelot', 'Killed'],
    ];

    /* cspell:disable-next-line */
    protected readonly search = ['Sir', 'Arrested', 'killed'];
}
