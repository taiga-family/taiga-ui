import {Component, Inject} from '@angular/core';
import {TuiDialogService} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-data-list-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiDataListExample2 {
    dropdownOpen = false;

    readonly burgers = ['Classic', 'Cheeseburger', 'Royal Cheeseburger'];
    readonly drinks = ['Cola', 'Tea', 'Coffee', 'Slurm'];

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    ) {}

    selectOption(item: string) {
        this.dropdownOpen = false;
        this.dialogService.open(`You selected ${item}`).subscribe();
    }
}
