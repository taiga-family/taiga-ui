import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFormatPhonePipe} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiFormatPhonePipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected phone = '+78005557778';
}
