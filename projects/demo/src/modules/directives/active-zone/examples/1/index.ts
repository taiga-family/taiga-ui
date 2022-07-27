import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {setNativeFocused} from '@taiga-ui/cdk';
import {TuiInputComponent} from '@taiga-ui/kit';

@Component({
    selector: `tui-active-zone-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiActiveZoneExample1 {
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
            setNativeFocused(nativeFocusableElement);
        }
    }
}
