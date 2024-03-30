import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonModule} from '@taiga-ui/experimental';
import {TuiCheckboxComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiCheckboxComponent, TuiButtonModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected checked = false;
}
