import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButton, type TuiDialogContext, TuiDialogService} from '@taiga-ui/core';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [AsyncPipe, TuiAmountPipe, TuiButton],
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

    protected withdraw(): void {
        this.money -= 100;
    }
}
