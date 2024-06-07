import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMonth} from '@taiga-ui/cdk';
import {tuiInputDateOptionsProvider} from '@taiga-ui/kit';
import {TuiInputMonthModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiInputMonthModule, ReactiveFormsModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiInputDateOptionsProvider({nativePicker: true})],
})
export default class ExampleComponent {
    protected readonly control = new FormControl<TuiMonth | null>(null);
    protected readonly min = TuiMonth.currentLocal().append({month: -12});
    protected readonly max = TuiMonth.currentLocal().append({month: 12});
}
