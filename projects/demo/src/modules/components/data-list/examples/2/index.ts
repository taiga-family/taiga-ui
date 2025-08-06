import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLet} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiDataList,
    TuiDialogService,
    TuiDropdown,
    type TuiSizeL,
    type TuiSizeS,
} from '@taiga-ui/core';
import {TuiDataListDropdownManager} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        TuiButton,
        TuiDataList,
        TuiDataListDropdownManager,
        TuiDropdown,
        TuiLet,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected dropdownOpen = false;
    protected size: TuiSizeL | TuiSizeS = 's';

    protected readonly burgers = [
        'Classic',
        'Cheeseburger',
        'Royal Cheeseburger Quarterpounder',
    ];

    protected readonly drinks = ['Cola', 'Tea', 'Coffee', 'Slurm'];

    protected open = false;

    protected selectOption(item: string): void {
        this.dropdownOpen = false;
        this.dialogs.open(`You selected ${item}`).subscribe();
    }
}
