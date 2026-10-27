import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint, tuiHintOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [TuiHint],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiHintOptionsProvider({arrowOffset: 18})],
})
export default class Example {}
