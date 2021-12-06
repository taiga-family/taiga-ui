import {Component, ViewChild} from '@angular/core';
import {TuiHostedDropdownComponent} from '@taiga-ui/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-hosted-dropdown-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiHostedDropdownExample1 {
    readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

    open = false;

    @ViewChild(TuiHostedDropdownComponent)
    component?: TuiHostedDropdownComponent;

    onClick() {
        this.open = false;

        if (this.component && this.component.nativeFocusableElement) {
            this.component.nativeFocusableElement.focus();
        }
    }
}
