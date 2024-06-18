import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiDataListComponent,
    TuiDropdownDirective,
    TuiDropdownHoverDirective,
    TuiDropdownOpenDirective,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiSwitchComponent,
    TuiTabDirective,
    TuiTabsHorizontalDirective,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiTabsHorizontalDirective,
        TuiTabDirective,
        TuiChevron,
        TuiDropdownHoverDirective,
        TuiDropdownDirective,
        TuiDropdownOpenDirective,
        TuiDataListComponent,
        TuiOptionComponent,
        ReactiveFormsModule,
        TuiSwitchComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        option: new FormControl(false),
    });

    protected open = false;
    protected openSettings = false;

    protected index = 0;

    protected onClick(): void {
        this.open = false;
        this.index = 1;
    }
}
