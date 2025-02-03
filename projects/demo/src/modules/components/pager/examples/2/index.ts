import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiPager} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, NgIf, TuiButton, TuiIcon, TuiPager],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected length = 8;
    protected index = 0;

    protected prev(): void {
        this.index = Math.max(this.index - 1, 0);
    }

    protected next(): void {
        this.index = Math.min(this.index + 1, this.length - 1);
    }
}
