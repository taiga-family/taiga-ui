import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiButtonOptionsProvider({size: 's'})],
})
export default class Example {}
