import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiSurfaceDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiSurfaceDirective, FormsModule, TuiRepeatTimesModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected value = null;
}
