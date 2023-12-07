import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

class Account {
    constructor(
        readonly name: string,
        readonly balance: number,
    ) {}

    toString(): string {
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
    readonly accounts = [
        new Account('Rubles', 500),
        new Account('Dollar', 237),
        new Account('Euro', 100),
    ];

    svgIcons = {
        rubles: import('./rubles.svg?raw'),
    };

    testForm = new UntypedFormGroup({
        name: new UntypedFormControl(''),
        accounts: new UntypedFormControl(this.accounts[0]),
    });
}
