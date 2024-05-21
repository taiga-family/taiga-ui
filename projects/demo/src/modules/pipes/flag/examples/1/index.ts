import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFlagPipe} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiFlagPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly countryIsoCode = 'AE';
}
