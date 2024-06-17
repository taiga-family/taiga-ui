import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButtonDirective,
    TuiDataListComponent,
    TuiDropdownDirective,
    TuiDropdownOpenDirective,
    TuiDropdownOptionsDirective,
    TuiDropdownPositionSidedDirective,
    TuiOptGroupDirective,
    TuiOptionComponent,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiDropdownOptionsDirective,
        TuiDropdownDirective,
        TuiDropdownPositionSidedDirective,
        TuiDropdownOpenDirective,
        TuiDataListComponent,
        TuiOptGroupDirective,
        NgForOf,
        TuiOptionComponent,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

    protected open = false;

    protected onClick(): void {
        this.open = false;
    }
}
