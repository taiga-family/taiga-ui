import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItemDirective} from '@taiga-ui/cdk';
import {
    TuiChipDirective,
    TuiItemsWithMoreComponent,
    TuiMoreDirective,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiItemsWithMoreComponent,
        TuiChipDirective,
        TuiItemDirective,
        TuiMoreDirective,
        NgForOf,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class PageComponent {
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
