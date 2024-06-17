import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiActiveZoneDirective, TuiObscuredDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiDropdownModule} from '@taiga-ui/core';
import {TuiChevronDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiDropdownModule,
        TuiButtonDirective,
        TuiChevronDirective,
        TuiActiveZoneDirective,
        TuiObscuredDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected onClick(): void {
        this.open = !this.open;
    }

    protected onObscured(obscured: boolean): void {
        if (obscured) {
            this.open = false;
        }
    }

    protected onActiveZone(active: boolean): void {
        this.open = active && this.open;
    }
}
