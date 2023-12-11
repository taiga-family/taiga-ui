import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHostedDropdownComponent} from '@taiga-ui/core';

@Component({
    selector: 'tui-dropdown-open-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiDropdownOpenExample2 {
    @ViewChild(TuiHostedDropdownComponent)
    component?: TuiHostedDropdownComponent;

    readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

    readonly selectItems = ['Item 1', 'Item 2'];

    open = false;

    selected = null;

    onClick(): void {
        this.open = false;
        this.component?.nativeFocusableElement?.focus();
    }
}
