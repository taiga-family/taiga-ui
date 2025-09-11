import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink} from '@taiga-ui/core';
import {TuiMessage} from '@taiga-ui/kit';

@Component({
    imports: [TuiLink, TuiMessage],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
