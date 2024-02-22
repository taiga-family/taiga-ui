import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
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
    protected childActive = false;
    protected parentActive = false;
    protected items = [1, 2, 3];

    public readonly control = new FormControl('');

    public onParentActiveZone(active: boolean): void {
        this.parentActive = active;
    }

    public onChildActiveZone(active: boolean): void {
        this.childActive = active;
    }

    public onClick({nativeFocusableElement}: TuiInputComponent): void {
        nativeFocusableElement?.focus();
    }
}
