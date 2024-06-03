import {NgForOf} from '@angular/common';
import {Component, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataListComponent,
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
    TuiDropdownOptionsDirective,
    TuiGroupDirective,
    TuiHostedDropdownComponent,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {TuiChevronDirective, TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiDropdownOptionsDirective,
        TuiGroupDirective,
        TuiDropdownDirective,
        TuiDropdownOpenDirective,
        TuiButtonDirective,
        TuiChevronDirective,
        TuiSelectModule,
        TuiActiveZoneDirective,
        FormsModule,
        TuiDataListWrapper,
        TuiDataListComponent,
        NgForOf,
        TuiOptionComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    @ViewChild(TuiHostedDropdownComponent)
    protected component?: TuiHostedDropdownComponent;

    protected readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

    protected readonly selectItems = ['Item 1', 'Item 2'];

    protected open = false;

    protected selected = null;

    protected onClick(): void {
        this.open = false;
        this.component?.nativeFocusableElement?.focus();
    }
}
