import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRating} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiRating],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
