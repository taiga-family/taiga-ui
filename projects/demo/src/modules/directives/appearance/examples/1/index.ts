import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiAppearanceDirective,
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiAppearanceDirective, TuiDropdownDirective, TuiDropdownOpenDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected open = false;
}
