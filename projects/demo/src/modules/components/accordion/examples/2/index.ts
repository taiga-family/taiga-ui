import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

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
    selector: 'tui-accordion-example-2',
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
