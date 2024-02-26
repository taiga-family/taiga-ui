import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-select-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSelectExample3 {
    protected readonly items = [
        'https://twitter.com/marsibarsi',
        'https://twitter.com/waterplea',
    ];

    protected readonly testForm = new FormGroup({
        email: new FormControl<string | null>(null),
        signature: new FormControl(''),
    });

    protected signatureVisible = false;

    protected toggle(): void {
        this.signatureVisible = !this.signatureVisible;
    }
}
