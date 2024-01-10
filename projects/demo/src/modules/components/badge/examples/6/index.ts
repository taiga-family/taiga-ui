import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiBadgeOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'tui-badge-example-6',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiBadgeOptionsProvider({appearance: 'primary'})],
})
export class TuiBadgeExample6 {}
