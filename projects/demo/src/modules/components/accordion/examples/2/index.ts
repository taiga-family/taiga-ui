import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiAccordion, TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiInputModule, TuiSelectModule} from '@taiga-ui/legacy';

class Account {
    constructor(
        protected readonly name: string,
        protected readonly balance: number,
    ) {}

    protected toString(): string {
        return `${this.name} (${this.balance})`;
    }
}

@Component({
    standalone: true,
    selector: 'tui-accordion-example-2',
    imports: [
        NgIf,
        TuiAccordion,
        AsyncPipe,
        TuiAmountPipe,
        TuiIcon,
        ReactiveFormsModule,
        TuiInputModule,
        TuiSelectModule,
        TuiDataListWrapper,
        TuiButton,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiAccordionExample2 {
    protected readonly accounts = [
        new Account('Rubles', 500),
        new Account('Dollar', 237),
        new Account('Euro', 100),
    ];

    protected testForm = new FormGroup({
        name: new FormControl(''),
        accounts: new FormControl(this.accounts[0]),
    });
}
