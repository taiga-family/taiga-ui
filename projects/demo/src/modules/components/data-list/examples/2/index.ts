import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLetDirective} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {
    TuiButtonDirective,
    TuiDataListComponent,
    TuiDialogService,
    TuiDropdownDirective,
    TuiDropdownManualDirective,
    TuiDropdownOpenDirective,
    TuiDropdownOptionsDirective,
    TuiDropdownPositionSidedDirective,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {TuiDataListDropdownManagerDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiDropdownDirective,
        TuiDropdownOpenDirective,
        TuiDataListDropdownManagerDirective,
        TuiOptionComponent,
        TuiDataListComponent,
        TuiLetDirective,
        TuiDropdownPositionSidedDirective,
        TuiDropdownOptionsDirective,
        TuiDropdownManualDirective,
        NgForOf,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected dropdownOpen = false;
    protected size: TuiSizeL | TuiSizeS = 's';

    protected readonly burgers = ['Classic', 'Cheeseburger', 'Royal Cheeseburger'];
    protected readonly drinks = ['Cola', 'Tea', 'Coffee', 'Slurm'];

    protected open = false;

    protected selectOption(item: string): void {
        this.dropdownOpen = false;
        this.dialogs.open(`You selected ${item}`).subscribe();
    }
}
