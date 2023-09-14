import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_PLATFORM} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-badge-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
    providers: [{provide: TUI_PLATFORM, useValue: 'ios'}],
})
export class TuiBadgeExample3 {}
