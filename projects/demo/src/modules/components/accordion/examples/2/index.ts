import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {default as rubl} from '!!raw-loader!./rubl.svg';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

class Account {
    constructor(readonly name: string, readonly balance: number) {}

    toString(): string {
        return `${this.name} (${this.balance})`;
    }
}

@Component({
    selector: 'tui-accordion-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiAccordionExample2 {
    readonly accounts = [
        new Account('Rubles', 500),
        new Account('Dollar', 237),
        new Account('Euro', 100),
    ];

    svgIcons = {rubl};

    testForm = new FormGroup({
        name: new FormControl(''),
        accounts: new FormControl(this.accounts[0]),
    });
}
