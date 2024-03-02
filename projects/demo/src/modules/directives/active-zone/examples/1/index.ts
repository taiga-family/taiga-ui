import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiInputComponent} from '@taiga-ui/kit';

@Component({
    selector: 'tui-active-zone-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiActiveZoneExample1 {
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
