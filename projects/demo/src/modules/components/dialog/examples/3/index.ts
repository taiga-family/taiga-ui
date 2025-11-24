import {AsyncPipe, NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {
    TuiButton,
    TuiDataList,
    type TuiDialogContext,
    TuiDialogService,
    TuiDropdown,
} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        TuiAmountPipe,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected money = 1000;

    protected showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
        this.dialogs.open(content).subscribe();
    }

    protected withdraw(sum: number): void {
        this.money -= sum;
    }
}
