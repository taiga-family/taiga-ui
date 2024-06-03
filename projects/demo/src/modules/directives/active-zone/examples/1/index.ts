import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import type {TuiInputComponent} from '@taiga-ui/legacy';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiActiveZoneDirective,
        TuiInputModule,
        ReactiveFormsModule,
        TuiButtonDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly control = new FormControl('');

    protected childActive = false;

    protected parentActive = false;

    protected items = [1, 2, 3];

    protected onParentActiveZone(active: boolean): void {
        this.parentActive = active;
    }

    protected onChildActiveZone(active: boolean): void {
        this.childActive = active;
    }

    protected onClick({nativeFocusableElement}: TuiInputComponent): void {
        if (nativeFocusableElement) {
            nativeFocusableElement.focus();
        }
    }
}
