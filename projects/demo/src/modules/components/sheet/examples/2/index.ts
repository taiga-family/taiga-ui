import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective} from '@taiga-ui/core';
import type {TuiSheetOptions} from '@taiga-ui/legacy';
import {TuiSheetModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiSheetModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetOptions> = {
        overlay: true,
        image: 'assets/images/avatar.jpg',
    };

    protected toggle(): void {
        this.open = !this.open;
    }
}
