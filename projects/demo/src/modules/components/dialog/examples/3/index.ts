import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import type {TuiDialogContext} from '@taiga-ui/core';
import {TuiButtonDirective, TuiDialogService} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiAmountPipe, AsyncPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    private readonly dialogs = inject(TuiDialogService);

    protected money = 1000;

    protected showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
        this.dialogs.open(content).subscribe();
    }

    protected withdraw(): void {
        this.money -= 100;
    }
}
