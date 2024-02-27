import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHostedDropdownComponent} from '@taiga-ui/core';

@Component({
    selector: 'tui-dropdown-open-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiDropdownOpenExample1 {
    @ViewChild(TuiHostedDropdownComponent)
    protected component?: TuiHostedDropdownComponent;

    protected readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

    protected open = false;

    protected onClick(): void {
        this.open = false;
        this.component?.nativeFocusableElement?.focus();
    }
}
