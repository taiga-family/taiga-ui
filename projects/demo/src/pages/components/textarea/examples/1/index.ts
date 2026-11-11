import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextarea} from '@taiga-ui/kit';

@Component({
    imports: [TuiTextarea],
    templateUrl: './index.html',
    styleUrl: './index.css',
    encapsulation,
    changeDetection,
})
export default class Example {}
