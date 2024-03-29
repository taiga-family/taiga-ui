import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, tuiButtonOptionsProvider} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButtonDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiButtonOptionsProvider({size: 's'})],
})
export default class ExampleComponent {}
