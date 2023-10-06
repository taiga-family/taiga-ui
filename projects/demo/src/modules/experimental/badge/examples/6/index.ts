import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiBadgeOptionsProvider} from '@taiga-ui/experimental';

@Component({
    selector: 'tui-badge-example-6',
    templateUrl: './index.html',
    providers: [tuiBadgeOptionsProvider({appearance: 'primary'})],
    changeDetection,
    encapsulation,
})
export class TuiBadgeExample6 {}
