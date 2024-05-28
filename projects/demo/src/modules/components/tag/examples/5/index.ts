import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTagModule, tuiTagOptionsProvider} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiTagModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiTagOptionsProvider({
            size: 'l',
            status: 'success',
        }),
    ],
})
export default class ExampleComponent {
    protected tag = 'Hello';
}
