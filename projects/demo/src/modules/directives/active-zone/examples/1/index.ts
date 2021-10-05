import {Component} from '@angular/core';
import {setNativeFocused} from '@taiga-ui/cdk';
import {TuiInputComponent} from '@taiga-ui/kit';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-active-zone-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiActiveZoneExample1 {
    childActive = false;

    parentActive = false;

    items = [1, 2, 3];

    onParentActiveZone(active: boolean) {
        this.parentActive = active;
    }

    onChildActiveZone(active: boolean) {
        this.childActive = active;
    }

    onClick({nativeFocusableElement}: TuiInputComponent) {
        if (nativeFocusableElement) {
            setNativeFocused(nativeFocusableElement);
        }
    }
}
