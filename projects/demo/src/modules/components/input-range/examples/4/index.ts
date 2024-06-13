import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIconComponent} from '@taiga-ui/core';
import {TuiInputRangeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiInputRangeModule, ReactiveFormsModule, TuiIconComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly control = new FormControl([20, 40]);

    // See https://angular.io/api/common/I18nPluralPipe
    protected readonly pluralize = {
        other: '%',
    };
}
