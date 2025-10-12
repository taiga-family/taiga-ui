import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadge, tuiBadgeOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiBadgeOptionsProvider({appearance: 'primary'})],
})
export default class Example {}
