import {Component, inject} from '@angular/core';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiDialogService} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-data-list-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiDataListExample2 {
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
