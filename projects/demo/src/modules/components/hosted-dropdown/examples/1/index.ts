import {NgForOf} from '@angular/common';
import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButtonDirective,
    TuiDataListComponent,
    TuiOptGroupDirective,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {TuiHostedDropdownComponent, TuiHostedDropdownModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiHostedDropdownModule,
        TuiButtonDirective,
        TuiDataListComponent,
        TuiOptGroupDirective,
        TuiOptionComponent,
        NgForOf,
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

    protected open = false;

    protected onClick(): void {
        this.open = false;
        this.component?.nativeFocusableElement?.focus();
    }
}
