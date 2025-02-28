import {Component, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMonth} from '@taiga-ui/cdk';
import {TuiDropdownOpen, TuiLink, TuiTextfield} from '@taiga-ui/core';
import {TuiInputMonth} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputMonth, TuiTextfield, TuiLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    @ViewChild(TuiDropdownOpen)
    protected readonly dropdown?: TuiDropdownOpen;

    protected value: TuiMonth | null = null;

    protected chooseTheOnlyCorrectOption(): void {
        this.value = new TuiMonth(1998, 2);
        this.dropdown?.toggle(false);
    }
}
