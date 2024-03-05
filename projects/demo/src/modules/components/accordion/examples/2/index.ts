import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButtonModule, TuiSvgModule} from '@taiga-ui/core';
import {
    TuiAccordionModule,
    TuiDataListWrapperModule,
    TuiInputModule,
    TuiSelectModule,
} from '@taiga-ui/kit';

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
        TuiAccordionModule,
        AsyncPipe,
        TuiSvgModule,
        TuiAmountPipe,
        ReactiveFormsModule,
        TuiInputModule,
        TuiSelectModule,
        TuiDataListWrapperModule,
        TuiButtonModule,
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

    protected svgIcons = {
        rubles: import('./rubles.svg?raw'),
    };

    protected testForm = new FormGroup({
        name: new FormControl(''),
        accounts: new FormControl(this.accounts[0]),
    });
}
