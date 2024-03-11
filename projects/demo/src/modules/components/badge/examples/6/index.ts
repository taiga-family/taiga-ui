import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadgeDirective, tuiBadgeOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-badge-example-6',
    imports: [TuiBadgeDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiBadgeOptionsProvider({appearance: 'primary'})],
})
export class TuiBadgeExample6 {}
