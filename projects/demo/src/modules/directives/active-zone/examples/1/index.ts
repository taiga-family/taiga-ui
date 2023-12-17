import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputComponent} from '@taiga-ui/kit';

@Component({
    selector: 'tui-active-zone-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiActiveZoneExample1 {
    readonly control = new UntypedFormControl();

    childActive = false;

    parentActive = false;

    items = [1, 2, 3];

    onParentActiveZone(active: boolean): void {
        this.parentActive = active;
    }

    onChildActiveZone(active: boolean): void {
        this.childActive = active;
    }

    onClick({nativeFocusableElement}: TuiInputComponent): void {
        if (nativeFocusableElement) {
            nativeFocusableElement.focus();
        }
    }
}
