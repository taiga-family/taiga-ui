import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialogService, TuiSizeL, TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: `tui-data-list-example-2`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiDataListExample2 {
    dropdownOpen = false;
    size: TuiSizeL | TuiSizeS = `s`;

    readonly burgers = [`Classic`, `Cheeseburger`, `Royal Cheeseburger`];
    readonly drinks = [`Cola`, `Tea`, `Coffee`, `Slurm`];

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    ) {}

    selectOption(item: string): void {
        this.dropdownOpen = false;
        this.dialogService.open(`You selected ${item}`).subscribe();
    }
}
