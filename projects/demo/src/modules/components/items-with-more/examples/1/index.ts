import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-items-with-more-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiItemsWithMoreExample1 {
    protected readonly items = [
        'John Cleese',
        'Eric Idle',
        'Graham Chapman',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
    ];

    protected readonly required = 3;

    protected getRemaining(index: number): number {
        const offset = index < this.required ? index + 2 : index + 1;

        return this.items.length - offset;
    }
}
