import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHostedDropdownComponent} from '@taiga-ui/core';

@Component({
    selector: 'tui-hosted-dropdown-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiHostedDropdownExample2 {
    readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

    readonly selectItems = ['Item 1', 'Item 2'];

    open = false;

    selected = null;

    @ViewChild(TuiHostedDropdownComponent)
    component?: TuiHostedDropdownComponent;

    onClick() {
        this.open = false;

        if (this.component && this.component.nativeFocusableElement) {
            this.component.nativeFocusableElement.focus();
        }
    }
}
