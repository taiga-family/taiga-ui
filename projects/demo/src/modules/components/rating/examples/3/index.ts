import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabelComponent} from '@taiga-ui/core';
import {TuiRatingComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiRatingComponent, TuiLabelComponent, FormsModule],
    templateUrl: 'index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
