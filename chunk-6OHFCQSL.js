import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiActiveZone} from '@taiga-ui/cdk';
import {TuiButton, TuiInput} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiActiveZone, TuiButton, TuiInput],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('');

    protected childActive = false;

    protected parentActive = false;

    protected items = [1, 2, 3];

    protected onParentActiveZone(active: boolean): void {
        this.parentActive = active;
    }

    protected onChildActiveZone(active: boolean): void {
        this.childActive = active;
    }

    protected onClick(el: HTMLInputElement): void {
        el.focus();
    }
}
`;export{o as default};
